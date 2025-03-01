/*
  eslint-disable
    jest/no-identical-title,
    jest/no-disabled-tests,
    jest/expect-expect,
    jest/no-export,
    @typescript-eslint/explicit-module-boundary-types
*/

import {
  BIN_DIR,
  DOCS_DIR,
  LIB_DIR,
  allModules,
  allOf,
  clearDir,
  compileDocsAndAssets,
  compileModule,
  copyDefinitions,
  execute,
  lintCheck,
  npmInstall,
  npmPublish,
  spellCheck,
  test,
  testModules,
  tsCheck,
} from './build/common.mjs';
import gulp from 'gulp';

const {parallel, series} = gulp;

export const lint = async () => await lintCheck('.');

export const spell = async () => {
  await spellCheck('.');
  await spellCheck('src', true);
  await spellCheck('test', true);
  await spellCheck('site', true);
};

export const ts = async () => {
  await copyDefinitions();
  await tsCheck('src');
  await tsCheck('test');
  await tsCheck('site');
};

export const compileForTest = async () => {
  await clearDir(LIB_DIR);
  await testModules(async (module) => {
    await compileModule(module, true, `${LIB_DIR}/debug`);
  });
  await copyDefinitions();
  await compileForCli();
};

export const compileForProd = async () => {
  await clearDir(LIB_DIR);

  await allModules(async (module) => {
    await allOf(
      [undefined, 'umd', 'cjs'],
      async (format) =>
        await allOf(
          [undefined, 'es6'],
          async (target) =>
            await allOf(
              [false, ...(target || format ? [] : [true])],
              async (debug) => {
                const folder = `${LIB_DIR}/${[
                  debug ? 'debug' : '',
                  format,
                  target,
                ]
                  .filter((token) => token)
                  .join('-')}`;
                await compileModule(module, debug, folder, format, target);
              },
            ),
        ),
    );
  });

  await copyDefinitions();
  await compileForCli();
};

export const compileForCli = async () => {
  await clearDir(BIN_DIR);
  await compileModule('cli', false, BIN_DIR, undefined, undefined, true);
  await execute(`chmod +x ${BIN_DIR}/cli.js`);
};

export const testUnit = async () => {
  await test('test/unit', {coverageMode: 1});
};
export const testUnitCountAsserts = async () => {
  await test('test/unit', {coverageMode: 2, countAsserts: true});
};
export const testUnitSaveCoverage = async () => {
  await test('test/unit', {coverageMode: 3});
};
export const compileAndTestUnit = series(compileForTest, testUnit);
export const compileAndTestUnitSaveCoverage = series(
  compileForTest,
  testUnitSaveCoverage,
);

export const testPerf = async () => {
  await test('test/perf', {serialTests: true});
};
export const compileAndTestPerf = series(compileForTest, testPerf);

export const testE2e = async () => {
  await test('test/e2e', {puppeteer: true});
};
export const compileAndTestE2e = series(compileForTest, testE2e);

export const compileDocsPagesOnly = async () =>
  await compileDocsAndAssets(false);

export const compileDocsAssetsOnly = async () =>
  await compileDocsAndAssets(false, false);

export const compileDocs = async () => await compileDocsAndAssets();

export const compileForProdAndDocs = series(compileForProd, compileDocs);

export const serveDocs = async () => {
  const {createServer} = await import('http-server');
  const {default: replace} = await import('buffer-replace');
  const removeDomain = (_, res) => {
    res._write = res.write;
    res.write = (buffer) =>
      res._write(replace(buffer, 'https://tinybase.org/', '/'.padStart(21)));
    res.emit('next');
  };
  createServer({
    root: DOCS_DIR,
    cache: -1,
    gzip: true,
    // eslint-disable-next-line no-console
    logFn: (req) => console.log(req.url),
    before: [removeDomain],
  }).listen('8080', '0.0.0.0');
};

export const preCommit = series(
  parallel(lint, spell, ts),
  compileForTest,
  testUnit,
  compileForProd,
);

export const prePublishPackage = series(
  npmInstall,
  parallel(lint, spell, ts),
  compileForTest,
  testUnitCountAsserts,
  testPerf,
  compileForProd,
  compileDocs,
  testE2e,
);

export const publishPackage = series(prePublishPackage, npmPublish);
