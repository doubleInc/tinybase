import {Id, Ids, Indexes, Metrics, Relationships} from 'tinybase/debug';
import {IdObj, IdObj2} from './types';
import {TextDecoder, TextEncoder} from 'util';
import fetchMock from 'jest-fetch-mock';
import fs from 'fs';

Object.assign(globalThis, {TextDecoder, TextEncoder});

export const pause = async (ms = 50): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const mockFetchWasm = (): void => {
  fetchMock.enableMocks();
  fetchMock.resetMocks();
  fetchMock.doMock(async (req) => {
    if (req.url.startsWith('file://')) {
      return {
        status: 200,
        body: fs.readFileSync(req.url.substring(7)) as any,
      };
    }
    return '';
  });
};

export const suppressWarnings = async <Return>(
  actions: () => Promise<Return>,
) => {
  /* eslint-disable no-console */
  const warn = console.warn;
  const error = console.error;
  console.warn = console.error = () => 0;
  const result = await actions();
  console.warn = warn;
  console.error = error;
  /* eslint-enable no-console */
  return result;
};

export const getMetricsObject = (
  metrics: Metrics,
): IdObj<number | undefined> => {
  const metricsObject: IdObj<number | undefined> = {};
  metrics.forEachMetric(
    (metricId) => (metricsObject[metricId] = metrics.getMetric(metricId)),
  );
  return metricsObject;
};

export const getIndexesObject = (indexes: Indexes): IdObj2<Ids> => {
  const indexesObject: IdObj2<Ids> = {};
  indexes.forEachIndex((indexId) => {
    indexesObject[indexId] = {};
    indexes
      .getSliceIds(indexId)
      .forEach(
        (sliceId) =>
          (indexesObject[indexId][sliceId] = indexes.getSliceRowIds(
            indexId,
            sliceId,
          )),
      );
  });
  return indexesObject;
};

export const getRelationshipsObject = (
  relationships: Relationships,
): IdObj<[IdObj<Id>, IdObj<Ids>]> => {
  const store = relationships.getStore();
  const relationshipsObject: IdObj<[IdObj<Id>, IdObj<Ids>]> = {};
  relationships.forEachRelationship((relationshipId) => {
    relationshipsObject[relationshipId] = [{}, {}];
    store
      .getRowIds(relationships.getLocalTableId(relationshipId) as string)
      .forEach((rowId) => {
        const remoteRowId = relationships.getRemoteRowId(relationshipId, rowId);
        if (remoteRowId != null) {
          relationshipsObject[relationshipId][0][rowId] = remoteRowId;
        }
      });
    store
      .getRowIds(relationships.getRemoteTableId(relationshipId) as string)
      .forEach((remoteRowId) => {
        const localRowIds = relationships.getLocalRowIds(
          relationshipId,
          remoteRowId,
        );
        if (localRowIds.length > 0) {
          relationshipsObject[relationshipId][1][remoteRowId] = localRowIds;
        }
      });
  });
  return relationshipsObject;
};
