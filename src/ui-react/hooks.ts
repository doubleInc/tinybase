import {
  ADD,
  CELL,
  CELL_IDS,
  EMPTY_STRING,
  GET,
  LISTENER,
  ROW,
  ROW_IDS,
  SORTED_ROW_IDS,
  TABLE,
  TABLES,
  TABLE_IDS,
  VALUE,
  VALUES,
  VALUE_IDS,
} from '../common/strings';
import {
  Callback,
  Id,
  IdOrNull,
  Ids,
  ParameterizedCallback,
} from '../types/common.d';
import {
  Cell,
  CellIdsListener,
  CellListener,
  MapCell,
  MapValue,
  Row,
  RowIdsListener,
  RowListener,
  SortedRowIdsListener,
  Store,
  Table,
  TableCellIdsListener,
  TableIdsListener,
  TableListener,
  Tables,
  TablesListener,
  Value,
  ValueIdsListener,
  ValueListener,
  Values,
  ValuesListener,
} from '../types/store.d';
import {
  CheckpointIds,
  CheckpointIdsListener,
  CheckpointListener,
  Checkpoints,
} from '../types/checkpoints';
import {
  CheckpointsOrCheckpointsId,
  IndexesOrIndexesId,
  MetricsOrMetricsId,
  QueriesOrQueriesId,
  RelationshipsOrRelationshipsId,
  StoreOrStoreId,
  UndoOrRedoInformation,
  useAddRowCallback as useAddRowCallbackDecl,
  useCell as useCellDecl,
  useCellIds as useCellIdsDecl,
  useCellIdsListener as useCellIdsListenerDecl,
  useCellListener as useCellListenerDecl,
  useCheckpoint as useCheckpointDecl,
  useCheckpointIds as useCheckpointIdsDecl,
  useCheckpointIdsListener as useCheckpointIdsListenerDecl,
  useCheckpointListener as useCheckpointListenerDecl,
  useCreateCheckpoints as useCreateCheckpointsDecl,
  useCreateIndexes as useCreateIndexesDecl,
  useCreateMetrics as useCreateMetricsDecl,
  useCreatePersister as useCreatePersisterDecl,
  useCreateQueries as useCreateQueriesDecl,
  useCreateRelationships as useCreateRelationshipsDecl,
  useCreateStore as useCreateStoreDecl,
  useDelCellCallback as useDelCellCallbackDecl,
  useDelRowCallback as useDelRowCallbackDecl,
  useDelTableCallback as useDelTableCallbackDecl,
  useDelTablesCallback as useDelTablesCallbackDecl,
  useDelValueCallback as useDelValueCallbackDecl,
  useDelValuesCallback as useDelValuesCallbackDecl,
  useGoBackwardCallback as useGoBackwardCallbackDecl,
  useGoForwardCallback as useGoForwardCallbackDecl,
  useGoToCallback as useGoToCallbackDecl,
  useLinkedRowIds as useLinkedRowIdsDecl,
  useLinkedRowIdsListener as useLinkedRowIdsListenerDecl,
  useLocalRowIds as useLocalRowIdsDecl,
  useLocalRowIdsListener as useLocalRowIdsListenerDecl,
  useMetric as useMetricDecl,
  useMetricListener as useMetricListenerDecl,
  useRedoInformation as useRedoInformationDecl,
  useRemoteRowId as useRemoteRowIdDecl,
  useRemoteRowIdListener as useRemoteRowIdListenerDecl,
  useResultCell as useResultCellDecl,
  useResultCellIds as useResultCellIdsDecl,
  useResultCellIdsListener as useResultCellIdsListenerDecl,
  useResultCellListener as useResultCellListenerDecl,
  useResultRow as useResultRowDecl,
  useResultRowIds as useResultRowIdsDecl,
  useResultRowIdsListener as useResultRowIdsListenerDecl,
  useResultRowListener as useResultRowListenerDecl,
  useResultSortedRowIds as useResultSortedRowIdsDecl,
  useResultSortedRowIdsListener as useResultSortedRowIdsListenerDecl,
  useResultTable as useResultTableDecl,
  useResultTableListener as useResultTableListenerDecl,
  useRow as useRowDecl,
  useRowIds as useRowIdsDecl,
  useRowIdsListener as useRowIdsListenerDecl,
  useRowListener as useRowListenerDecl,
  useSetCellCallback as useSetCellCallbackDecl,
  useSetCheckpointCallback as useSetCheckpointCallbackDecl,
  useSetPartialRowCallback as useSetPartialRowCallbackDecl,
  useSetPartialValuesCallback as useSetPartialValuesCallbackDecl,
  useSetRowCallback as useSetRowCallbackDecl,
  useSetTableCallback as useSetTableCallbackDecl,
  useSetTablesCallback as useSetTablesCallbackDecl,
  useSetValueCallback as useSetValueCallbackDecl,
  useSetValuesCallback as useSetValuesCallbackDecl,
  useSliceIds as useSliceIdsDecl,
  useSliceIdsListener as useSliceIdsListenerDecl,
  useSliceRowIds as useSliceRowIdsDecl,
  useSliceRowIdsListener as useSliceRowIdsListenerDecl,
  useSortedRowIds as useSortedRowIdsDecl,
  useSortedRowIdsListener as useSortedRowIdsListenerDecl,
  useTableCellIds as useTableCellIdsDecl,
  useTableCellIdsListener as useTableCellIdsListenerDecl,
  useTable as useTableDecl,
  useTableIds as useTableIdsDecl,
  useTableIdsListener as useTableIdsListenerDecl,
  useTableListener as useTableListenerDecl,
  useTables as useTablesDecl,
  useTablesListener as useTablesListenerDecl,
  useUndoInformation as useUndoInformationDecl,
  useValue as useValueDecl,
  useValueIds as useValueIdsDecl,
  useValueIdsListener as useValueIdsListenerDecl,
  useValueListener as useValueListenerDecl,
  useValues as useValuesDecl,
  useValuesListener as useValuesListenerDecl,
} from '../types/ui-react.d';
import {
  Indexes,
  SliceIdsListener,
  SliceRowIdsListener,
} from '../types/indexes.d';
import {
  LinkedRowIdsListener,
  LocalRowIdsListener,
  Relationships,
  RemoteRowIdListener,
} from '../types/relationships.d';
import {MetricListener, Metrics} from '../types/metrics.d';
import {
  Queries,
  ResultCellIdsListener,
  ResultCellListener,
  ResultRowIdsListener,
  ResultRowListener,
  ResultSortedRowIdsListener,
  ResultTableListener,
} from '../types/queries.d';
import {getUndefined, ifNotUndefined, isUndefined} from '../common/other';
import {
  useCheckpointsOrCheckpointsId,
  useIndexesOrIndexesId,
  useMetricsOrMetricsId,
  useQueriesOrQueriesId,
  useRelationshipsOrRelationshipsId,
  useStoreOrStoreId,
} from './common';
import {ListenerArgument} from '../common/listeners';
import {Persister} from '../types/persisters.d';
import React from 'react';
import {arrayIsEmpty} from '../common/array';

export {
  useCheckpoints,
  useIndexes,
  useMetrics,
  useQueries,
  useRelationships,
  useStore,
} from './common';

const {useCallback, useEffect, useMemo, useRef, useState} = React;

const useCreate = (
  store: Store,
  create: (store: Store) => any,
  createDeps: React.DependencyList = [],
) => {
  const thing = useMemo(
    () => create(store),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, ...createDeps],
  );
  useEffect(() => () => thing.destroy(), [thing]);
  return thing;
};

const useListenable = (
  listenable: string, // internal & stable
  thing: any,
  defaulted: any, // internal & stable
  args: ListenerArgument[] = [],
  getFromListenerArg?: number,
): any => {
  const [, rerender] = useState<[]>();
  const getResult = useCallback(
    () => thing?.[GET + listenable]?.(...args) ?? defaulted,
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [thing, ...args],
  );
  const [initialResult] = useState(getResult);
  const result = useRef(initialResult);
  useMemo(() => (result.current = getResult()), [getResult]);
  useListener(
    listenable,
    thing,
    (...listenerArgs: any[]) => {
      result.current = isUndefined(getFromListenerArg)
        ? getResult()
        : listenerArgs[getFromListenerArg];
      rerender([]);
    },
    [],
    args,
  );
  return result.current;
};

const useListener = (
  listenable: string, // internal & stable
  thing: any,
  listener: (...args: any[]) => void,
  listenerDeps: React.DependencyList = [],
  preArgs: ListenerArgument[] = [],
  ...postArgs: ListenerArgument[]
): void =>
  useEffect(() => {
    const listenerId = thing?.[ADD + listenable + LISTENER]?.(
      ...preArgs,
      listener,
      ...postArgs,
    );
    return () => thing?.delListener(listenerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thing, ...preArgs, ...listenerDeps, ...postArgs]);

const useSetCallback = <Parameter, Thing>(
  storeOrStoreId: StoreOrStoreId | undefined,
  settable: string,
  get: (parameter: Parameter, store: Store) => Thing,
  getDeps: React.DependencyList = [],
  then: (store: Store, thing: Thing) => void = getUndefined,
  thenDeps: React.DependencyList = [],
  ...args: Ids
): ParameterizedCallback<Parameter> => {
  const store = useStoreOrStoreId(storeOrStoreId);
  return useCallback(
    (parameter) =>
      ifNotUndefined(store, (store: any) =>
        ifNotUndefined(get(parameter as any, store), (thing: Thing) =>
          then(store['set' + settable](...args, thing), thing),
        ),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, settable, ...getDeps, ...thenDeps, ...args],
  );
};

const useDel = (
  storeOrStoreId: StoreOrStoreId | undefined,
  deletable: string,
  then: (store: Store) => void = getUndefined,
  thenDeps: React.DependencyList = [],
  ...args: (Id | boolean | undefined)[]
) => {
  const store: any = useStoreOrStoreId(storeOrStoreId);
  return useCallback(
    () => then(store?.['del' + deletable](...args)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, deletable, ...thenDeps, ...args],
  );
};

const useCheckpointAction = (
  checkpointsOrCheckpointsId: CheckpointsOrCheckpointsId | undefined,
  action: string,
  arg?: string,
) => {
  const checkpoints: any = useCheckpointsOrCheckpointsId(
    checkpointsOrCheckpointsId,
  );
  return useCallback(
    () => checkpoints?.[action](arg),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkpoints, action, arg],
  );
};

export const useCreateStore: typeof useCreateStoreDecl = (
  create: () => Store,
  createDeps: React.DependencyList = [],
  // eslint-disable-next-line react-hooks/exhaustive-deps
): Store => useMemo(create, createDeps);

export const useTables: typeof useTablesDecl = (
  storeOrStoreId?: StoreOrStoreId,
): Tables => useListenable(TABLES, useStoreOrStoreId(storeOrStoreId), {});

export const useTableIds: typeof useTableIdsDecl = (
  storeOrStoreId?: StoreOrStoreId,
): Ids => useListenable(TABLE_IDS, useStoreOrStoreId(storeOrStoreId), [], []);

export const useTable: typeof useTableDecl = (
  tableId: Id,
  storeOrStoreId?: StoreOrStoreId,
): Table =>
  useListenable(TABLE, useStoreOrStoreId(storeOrStoreId), {}, [tableId]);

export const useTableCellIds: typeof useTableCellIdsDecl = (
  tableId: Id,
  storeOrStoreId?: StoreOrStoreId,
): Ids =>
  useListenable(
    TABLE + CELL_IDS,
    useStoreOrStoreId(storeOrStoreId),
    [],
    [tableId],
  );

export const useRowIds: typeof useRowIdsDecl = (
  tableId: Id,
  storeOrStoreId?: StoreOrStoreId,
): Ids =>
  useListenable(ROW_IDS, useStoreOrStoreId(storeOrStoreId), [], [tableId]);

export const useSortedRowIds: typeof useSortedRowIdsDecl = (
  tableId: Id,
  cellId?: Id,
  descending?: boolean,
  offset = 0,
  limit?: number,
  storeOrStoreId?: StoreOrStoreId,
): Ids =>
  useListenable(
    SORTED_ROW_IDS,
    useStoreOrStoreId(storeOrStoreId),
    [],
    [tableId, cellId, descending, offset, limit],
    6,
  );

export const useRow: typeof useRowDecl = (
  tableId: Id,
  rowId: Id,
  storeOrStoreId?: StoreOrStoreId,
): Row =>
  useListenable(ROW, useStoreOrStoreId(storeOrStoreId), {}, [tableId, rowId]);

export const useCellIds: typeof useCellIdsDecl = (
  tableId: Id,
  rowId: Id,
  storeOrStoreId?: StoreOrStoreId,
): Ids =>
  useListenable(
    CELL_IDS,
    useStoreOrStoreId(storeOrStoreId),
    [],
    [tableId, rowId],
  );

export const useCell: typeof useCellDecl = (
  tableId: Id,
  rowId: Id,
  cellId: Id,
  storeOrStoreId?: StoreOrStoreId,
): Cell | undefined =>
  useListenable(
    CELL,
    useStoreOrStoreId(storeOrStoreId),
    undefined,
    [tableId, rowId, cellId],
    4,
  );

export const useValues: typeof useValuesDecl = (
  storeOrStoreId?: StoreOrStoreId,
): Values => useListenable(VALUES, useStoreOrStoreId(storeOrStoreId), {});

export const useValueIds: typeof useValueIdsDecl = (
  storeOrStoreId?: StoreOrStoreId,
): Ids => useListenable(VALUE_IDS, useStoreOrStoreId(storeOrStoreId), [], []);

export const useValue: typeof useValueDecl = (
  valueId: Id,
  storeOrStoreId?: StoreOrStoreId,
): Value =>
  useListenable(VALUE, useStoreOrStoreId(storeOrStoreId), undefined, [valueId]);

export const useSetTablesCallback: typeof useSetTablesCallbackDecl = <
  Parameter,
>(
  getTables: (parameter: Parameter, store: Store) => Tables,
  getTablesDeps?: React.DependencyList,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store, tables: Tables) => void,
  thenDeps?: React.DependencyList,
): ParameterizedCallback<Parameter> =>
  useSetCallback(
    storeOrStoreId,
    TABLES,
    getTables,
    getTablesDeps,
    then,
    thenDeps,
  );

export const useSetTableCallback: typeof useSetTableCallbackDecl = <Parameter>(
  tableId: Id,
  getTable: (parameter: Parameter, store: Store) => Table,
  getTableDeps?: React.DependencyList,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store, table: Table) => void,
  thenDeps?: React.DependencyList,
): ParameterizedCallback<Parameter> =>
  useSetCallback(
    storeOrStoreId,
    TABLE,
    getTable,
    getTableDeps,
    then,
    thenDeps,
    tableId,
  );

export const useSetRowCallback: typeof useSetRowCallbackDecl = <Parameter>(
  tableId: Id,
  rowId: Id,
  getRow: (parameter: Parameter, store: Store) => Row,
  getRowDeps?: React.DependencyList,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store, row: Row) => void,
  thenDeps?: React.DependencyList,
): ParameterizedCallback<Parameter> =>
  useSetCallback(
    storeOrStoreId,
    ROW,
    getRow,
    getRowDeps,
    then,
    thenDeps,
    tableId,
    rowId,
  );

export const useAddRowCallback: typeof useAddRowCallbackDecl = <Parameter>(
  tableId: Id,
  getRow: (parameter: Parameter, store: Store) => Row,
  getRowDeps: React.DependencyList = [],
  storeOrStoreId?: StoreOrStoreId,
  then: (rowId: Id | undefined, store: Store, row: Row) => void = getUndefined,
  thenDeps: React.DependencyList = [],
  reuseRowIds = true,
): ParameterizedCallback<Parameter> => {
  const store = useStoreOrStoreId(storeOrStoreId);
  return useCallback(
    (parameter) =>
      ifNotUndefined(store, (store) =>
        ifNotUndefined(getRow(parameter as any, store), (row: Row) =>
          then(store.addRow(tableId, row, reuseRowIds), store, row),
        ),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, tableId, ...getRowDeps, ...thenDeps, reuseRowIds],
  );
};

export const useSetPartialRowCallback: typeof useSetPartialRowCallbackDecl = <
  Parameter,
>(
  tableId: Id,
  rowId: Id,
  getPartialRow: (parameter: Parameter, store: Store) => Row,
  getPartialRowDeps?: React.DependencyList,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store, partialRow: Row) => void,
  thenDeps?: React.DependencyList,
): ParameterizedCallback<Parameter> =>
  useSetCallback(
    storeOrStoreId,
    'PartialRow',
    getPartialRow,
    getPartialRowDeps,
    then,
    thenDeps,
    tableId,
    rowId,
  );

export const useSetCellCallback: typeof useSetCellCallbackDecl = <Parameter>(
  tableId: Id,
  rowId: Id,
  cellId: Id,
  getCell: (parameter: Parameter, store: Store) => Cell | MapCell,
  getCellDeps?: React.DependencyList,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store, cell: Cell | MapCell) => void,
  thenDeps?: React.DependencyList,
): ParameterizedCallback<Parameter> =>
  useSetCallback(
    storeOrStoreId,
    CELL,
    getCell,
    getCellDeps,
    then,
    thenDeps,
    tableId,
    rowId,
    cellId,
  );

export const useSetValuesCallback: typeof useSetValuesCallbackDecl = <
  Parameter,
>(
  getValues: (parameter: Parameter, store: Store) => Values,
  getValuesDeps?: React.DependencyList,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store, values: Values) => void,
  thenDeps?: React.DependencyList,
): ParameterizedCallback<Parameter> =>
  useSetCallback(
    storeOrStoreId,
    VALUES,
    getValues,
    getValuesDeps,
    then,
    thenDeps,
  );

export const useSetPartialValuesCallback: typeof useSetPartialValuesCallbackDecl =
  <Parameter>(
    getPartialValues: (parameter: Parameter, store: Store) => Values,
    getPartialValuesDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId,
    then?: (store: Store, partialValues: Values) => void,
    thenDeps?: React.DependencyList,
  ): ParameterizedCallback<Parameter> =>
    useSetCallback(
      storeOrStoreId,
      'PartialValues',
      getPartialValues,
      getPartialValuesDeps,
      then,
      thenDeps,
    );

export const useSetValueCallback: typeof useSetValueCallbackDecl = <Parameter>(
  valueId: Id,
  getValue: (parameter: Parameter, store: Store) => Value | MapValue,
  getValueDeps?: React.DependencyList,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store, value: Value | MapValue) => void,
  thenDeps?: React.DependencyList,
): ParameterizedCallback<Parameter> =>
  useSetCallback(
    storeOrStoreId,
    VALUE,
    getValue,
    getValueDeps,
    then,
    thenDeps,
    valueId,
  );

export const useDelTablesCallback: typeof useDelTablesCallbackDecl = (
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList,
): Callback => useDel(storeOrStoreId, TABLES, then, thenDeps);

export const useDelTableCallback: typeof useDelTableCallbackDecl = (
  tableId: Id,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList,
): Callback => useDel(storeOrStoreId, TABLE, then, thenDeps, tableId);

export const useDelRowCallback: typeof useDelRowCallbackDecl = (
  tableId: Id,
  rowId: Id,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList,
): Callback => useDel(storeOrStoreId, ROW, then, thenDeps, tableId, rowId);

export const useDelCellCallback: typeof useDelCellCallbackDecl = (
  tableId: Id,
  rowId: Id,
  cellId: Id,
  forceDel?: boolean,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList,
): Callback =>
  useDel(
    storeOrStoreId,
    CELL,
    then,
    thenDeps,
    tableId,
    rowId,
    cellId,
    forceDel,
  );

export const useDelValuesCallback: typeof useDelValuesCallbackDecl = (
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList,
): Callback => useDel(storeOrStoreId, VALUES, then, thenDeps);

export const useDelValueCallback: typeof useDelValueCallbackDecl = (
  valueId: Id,
  storeOrStoreId?: StoreOrStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList,
): Callback => useDel(storeOrStoreId, VALUE, then, thenDeps, valueId);

export const useTablesListener: typeof useTablesListenerDecl = (
  listener: TablesListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    TABLES,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [],
    mutator,
  );

export const useTableIdsListener: typeof useTableIdsListenerDecl = (
  listener: TableIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    TABLE_IDS,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [],
    mutator,
  );

export const useTableListener: typeof useTableListenerDecl = (
  tableId: IdOrNull,
  listener: TableListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    TABLE,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [tableId],
    mutator,
  );

export const useTableCellIdsListener: typeof useTableCellIdsListenerDecl = (
  tableId: IdOrNull,
  listener: TableCellIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    TABLE + CELL_IDS,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [tableId],
    mutator,
  );

export const useRowIdsListener: typeof useRowIdsListenerDecl = (
  tableId: IdOrNull,
  listener: RowIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    ROW_IDS,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [tableId],
    mutator,
  );

export const useSortedRowIdsListener: typeof useSortedRowIdsListenerDecl = (
  tableId: Id,
  cellId: Id | undefined,
  descending: boolean,
  offset: number,
  limit: number | undefined,
  listener: SortedRowIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    SORTED_ROW_IDS,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [tableId, cellId, descending, offset, limit],
    mutator,
  );

export const useRowListener: typeof useRowListenerDecl = (
  tableId: IdOrNull,
  rowId: IdOrNull,
  listener: RowListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    ROW,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [tableId, rowId],
    mutator,
  );

export const useCellIdsListener: typeof useCellIdsListenerDecl = (
  tableId: IdOrNull,
  rowId: IdOrNull,
  listener: CellIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    CELL_IDS,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [tableId, rowId],
    mutator,
  );

export const useCellListener: typeof useCellListenerDecl = (
  tableId: IdOrNull,
  rowId: IdOrNull,
  cellId: IdOrNull,
  listener: CellListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    CELL,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [tableId, rowId, cellId],
    mutator,
  );

export const useValuesListener: typeof useValuesListenerDecl = (
  listener: ValuesListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    VALUES,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [],
    mutator,
  );

export const useValueIdsListener: typeof useValueIdsListenerDecl = (
  listener: ValueIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    VALUE_IDS,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [],
    mutator,
  );

export const useValueListener: typeof useValueListenerDecl = (
  valueId: IdOrNull,
  listener: ValueListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  storeOrStoreId?: StoreOrStoreId,
): void =>
  useListener(
    VALUE,
    useStoreOrStoreId(storeOrStoreId),
    listener,
    listenerDeps,
    [valueId],
    mutator,
  );

export const useCreateMetrics: typeof useCreateMetricsDecl = (
  store: Store,
  create: (store: Store) => Metrics,
  createDeps?: React.DependencyList,
): Metrics => useCreate(store, create, createDeps);

export const useMetric: typeof useMetricDecl = (
  metricId: Id,
  metricsOrMetricsId?: MetricsOrMetricsId,
): number | undefined =>
  useListenable(
    'Metric',
    useMetricsOrMetricsId(metricsOrMetricsId),
    undefined,
    [metricId],
  );

export const useMetricListener: typeof useMetricListenerDecl = (
  metricId: IdOrNull,
  listener: MetricListener,
  listenerDeps?: React.DependencyList,
  metricsOrMetricsId?: MetricsOrMetricsId,
): void =>
  useListener(
    'Metric',
    useMetricsOrMetricsId(metricsOrMetricsId),
    listener,
    listenerDeps,
    [metricId],
  );

export const useCreateIndexes: typeof useCreateIndexesDecl = (
  store: Store,
  create: (store: Store) => Indexes,
  createDeps?: React.DependencyList,
): Indexes => useCreate(store, create, createDeps);

export const useSliceIds: typeof useSliceIdsDecl = (
  indexId: Id,
  indexesOrIndexesId?: IndexesOrIndexesId,
): Ids =>
  useListenable(
    'SliceIds',
    useIndexesOrIndexesId(indexesOrIndexesId),
    [],
    [indexId],
  );

export const useSliceRowIds: typeof useSliceRowIdsDecl = (
  indexId: Id,
  sliceId: Id,
  indexesOrIndexesId?: IndexesOrIndexesId,
): Ids =>
  useListenable(
    'SliceRowIds',
    useIndexesOrIndexesId(indexesOrIndexesId),
    [],
    [indexId, sliceId],
  );

export const useSliceIdsListener: typeof useSliceIdsListenerDecl = (
  indexId: IdOrNull,
  listener: SliceIdsListener,
  listenerDeps?: React.DependencyList,
  indexesOrIndexesId?: IndexesOrIndexesId,
): void =>
  useListener(
    'SliceIds',
    useIndexesOrIndexesId(indexesOrIndexesId),
    listener,
    listenerDeps,
    [indexId],
  );

export const useSliceRowIdsListener: typeof useSliceRowIdsListenerDecl = (
  indexId: IdOrNull,
  sliceId: IdOrNull,
  listener: SliceRowIdsListener,
  listenerDeps?: React.DependencyList,
  indexesOrIndexesId?: IndexesOrIndexesId,
): void =>
  useListener(
    'SliceRowIds',
    useIndexesOrIndexesId(indexesOrIndexesId),
    listener,
    listenerDeps,
    [indexId, sliceId],
  );

export const useCreateRelationships: typeof useCreateRelationshipsDecl = (
  store: Store,
  create: (store: Store) => Relationships,
  createDeps?: React.DependencyList,
): Relationships => useCreate(store, create, createDeps);

export const useRemoteRowId: typeof useRemoteRowIdDecl = (
  relationshipId: Id,
  localRowId: Id,
  relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId,
): Id | undefined =>
  useListenable(
    'RemoteRowId',
    useRelationshipsOrRelationshipsId(relationshipsOrRelationshipsId),
    undefined,
    [relationshipId, localRowId],
  );

export const useLocalRowIds: typeof useLocalRowIdsDecl = (
  relationshipId: Id,
  remoteRowId: Id,
  relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId,
): Ids =>
  useListenable(
    'LocalRowIds',
    useRelationshipsOrRelationshipsId(relationshipsOrRelationshipsId),
    [],
    [relationshipId, remoteRowId],
  );

export const useLinkedRowIds: typeof useLinkedRowIdsDecl = (
  relationshipId: Id,
  firstRowId: Id,
  relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId,
): Ids =>
  useListenable(
    'LinkedRowIds',
    useRelationshipsOrRelationshipsId(relationshipsOrRelationshipsId),
    [],
    [relationshipId, firstRowId],
  );

export const useRemoteRowIdListener: typeof useRemoteRowIdListenerDecl = (
  relationshipId: IdOrNull,
  localRowId: IdOrNull,
  listener: RemoteRowIdListener,
  listenerDeps?: React.DependencyList,
  relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId,
): void =>
  useListener(
    'RemoteRowId',
    useRelationshipsOrRelationshipsId(relationshipsOrRelationshipsId),
    listener,
    listenerDeps,
    [relationshipId, localRowId],
  );

export const useLocalRowIdsListener: typeof useLocalRowIdsListenerDecl = (
  relationshipId: IdOrNull,
  remoteRowId: IdOrNull,
  listener: LocalRowIdsListener,
  listenerDeps?: React.DependencyList,
  relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId,
): void =>
  useListener(
    'LocalRowIds',
    useRelationshipsOrRelationshipsId(relationshipsOrRelationshipsId),
    listener,
    listenerDeps,
    [relationshipId, remoteRowId],
  );

export const useLinkedRowIdsListener: typeof useLinkedRowIdsListenerDecl = (
  relationshipId: Id,
  firstRowId: Id,
  listener: LinkedRowIdsListener,
  listenerDeps?: React.DependencyList,
  relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId,
): void =>
  useListener(
    'LinkedRowIds',
    useRelationshipsOrRelationshipsId(relationshipsOrRelationshipsId),
    listener,
    listenerDeps,
    [relationshipId, firstRowId],
  );

export const useCreateQueries: typeof useCreateQueriesDecl = (
  store: Store,
  create: (store: Store) => Queries,
  createDeps?: React.DependencyList,
): Queries => useCreate(store, create, createDeps);

export const useResultTable: typeof useResultTableDecl = (
  queryId: Id,
  queriesOrQueriesId?: QueriesOrQueriesId,
): Table =>
  useListenable('ResultTable', useQueriesOrQueriesId(queriesOrQueriesId), {}, [
    queryId,
  ]);

export const useResultRowIds: typeof useResultRowIdsDecl = (
  queryId: Id,
  queriesOrQueriesId?: QueriesOrQueriesId,
): Ids =>
  useListenable(
    'ResultRowIds',
    useQueriesOrQueriesId(queriesOrQueriesId),
    [],
    [queryId],
  );

export const useResultSortedRowIds: typeof useResultSortedRowIdsDecl = (
  queryId: Id,
  cellId?: Id,
  descending?: boolean,
  offset = 0,
  limit?: number,
  queriesOrQueriesId?: QueriesOrQueriesId,
): Ids =>
  useListenable(
    'ResultSortedRowIds',
    useQueriesOrQueriesId(queriesOrQueriesId),
    [],
    [queryId, cellId, descending, offset, limit],
    6,
  );

export const useResultRow: typeof useResultRowDecl = (
  queryId: Id,
  rowId: Id,
  queriesOrQueriesId?: QueriesOrQueriesId,
): Row =>
  useListenable('ResultRow', useQueriesOrQueriesId(queriesOrQueriesId), {}, [
    queryId,
    rowId,
  ]);

export const useResultCellIds: typeof useResultCellIdsDecl = (
  queryId: Id,
  rowId: Id,
  queriesOrQueriesId?: QueriesOrQueriesId,
): Ids =>
  useListenable(
    'ResultCellIds',
    useQueriesOrQueriesId(queriesOrQueriesId),
    [],
    [queryId, rowId],
  );

export const useResultCell: typeof useResultCellDecl = (
  queryId: Id,
  rowId: Id,
  cellId: Id,
  queriesOrQueriesId?: QueriesOrQueriesId,
): Cell | undefined =>
  useListenable(
    'ResultCell',
    useQueriesOrQueriesId(queriesOrQueriesId),
    undefined,
    [queryId, rowId, cellId],
  );

export const useResultTableListener: typeof useResultTableListenerDecl = (
  queryId: IdOrNull,
  listener: ResultTableListener,
  listenerDeps?: React.DependencyList,
  queriesOrQueriesId?: QueriesOrQueriesId,
): void =>
  useListener(
    'ResultTable',
    useQueriesOrQueriesId(queriesOrQueriesId),
    listener,
    listenerDeps,
    [queryId],
  );

export const useResultRowIdsListener: typeof useResultRowIdsListenerDecl = (
  queryId: IdOrNull,
  listener: ResultRowIdsListener,
  listenerDeps?: React.DependencyList,
  queriesOrQueriesId?: QueriesOrQueriesId,
): void =>
  useListener(
    'ResultRowIds',
    useQueriesOrQueriesId(queriesOrQueriesId),
    listener,
    listenerDeps,
    [queryId],
  );

export const useResultSortedRowIdsListener: typeof useResultSortedRowIdsListenerDecl =
  (
    queryId: Id,
    cellId: Id | undefined,
    descending: boolean,
    offset: number,
    limit: number | undefined,
    listener: ResultSortedRowIdsListener,
    listenerDeps?: React.DependencyList,
    queriesOrQueriesId?: QueriesOrQueriesId,
  ): void =>
    useListener(
      'ResultSortedRowIds',
      useQueriesOrQueriesId(queriesOrQueriesId),
      listener,
      listenerDeps,
      [queryId, cellId, descending, offset, limit],
    );

export const useResultRowListener: typeof useResultRowListenerDecl = (
  queryId: IdOrNull,
  rowId: IdOrNull,
  listener: ResultRowListener,
  listenerDeps?: React.DependencyList,
  queriesOrQueriesId?: QueriesOrQueriesId,
): void =>
  useListener(
    'ResultRow',
    useQueriesOrQueriesId(queriesOrQueriesId),
    listener,
    listenerDeps,
    [queryId, rowId],
  );

export const useResultCellIdsListener: typeof useResultCellIdsListenerDecl = (
  queryId: IdOrNull,
  rowId: IdOrNull,
  listener: ResultCellIdsListener,
  listenerDeps?: React.DependencyList,
  queriesOrQueriesId?: QueriesOrQueriesId,
): void =>
  useListener(
    'ResultCellIds',
    useQueriesOrQueriesId(queriesOrQueriesId),
    listener,
    listenerDeps,
    [queryId, rowId],
  );

export const useResultCellListener: typeof useResultCellListenerDecl = (
  queryId: IdOrNull,
  rowId: IdOrNull,
  cellId: IdOrNull,
  listener: ResultCellListener,
  listenerDeps?: React.DependencyList,
  queriesOrQueriesId?: QueriesOrQueriesId,
): void =>
  useListener(
    'ResultCell',
    useQueriesOrQueriesId(queriesOrQueriesId),
    listener,
    listenerDeps,
    [queryId, rowId, cellId],
  );

export const useCreateCheckpoints: typeof useCreateCheckpointsDecl = (
  store: Store,
  create: (store: Store) => Checkpoints,
  createDeps?: React.DependencyList,
): Checkpoints => useCreate(store, create, createDeps);

export const useCheckpointIds: typeof useCheckpointIdsDecl = (
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): CheckpointIds =>
  useListenable(
    'CheckpointIds',
    useCheckpointsOrCheckpointsId(checkpointsOrCheckpointsId),
    [[], undefined, []],
  );

export const useCheckpoint: typeof useCheckpointDecl = (
  checkpointId: Id,
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): string | undefined =>
  useListenable(
    'Checkpoint',
    useCheckpointsOrCheckpointsId(checkpointsOrCheckpointsId),
    undefined,
    [checkpointId],
  );

export const useSetCheckpointCallback: typeof useSetCheckpointCallbackDecl = <
  Parameter,
>(
  getCheckpoint: (parameter: Parameter) => string | undefined = getUndefined,
  getCheckpointDeps: React.DependencyList = [],
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
  then: (
    checkpointId: Id,
    checkpoints: Checkpoints,
    label?: string,
  ) => void = getUndefined,
  thenDeps: React.DependencyList = [],
): ParameterizedCallback<Parameter> => {
  const checkpoints = useCheckpointsOrCheckpointsId(checkpointsOrCheckpointsId);
  return useCallback(
    (parameter) =>
      ifNotUndefined(checkpoints, (checkpoints) => {
        const label = getCheckpoint(parameter as any);
        then(checkpoints.addCheckpoint(label), checkpoints, label);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkpoints, ...getCheckpointDeps, ...thenDeps],
  );
};

export const useGoBackwardCallback: typeof useGoBackwardCallbackDecl = (
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): Callback => useCheckpointAction(checkpointsOrCheckpointsId, 'goBackward');

export const useGoForwardCallback: typeof useGoForwardCallbackDecl = (
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): Callback => useCheckpointAction(checkpointsOrCheckpointsId, 'goForward');

export const useGoToCallback: typeof useGoToCallbackDecl = <Parameter>(
  getCheckpointId: (parameter: Parameter) => Id,
  getCheckpointIdDeps: React.DependencyList = [],
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
  then: (checkpoints: Checkpoints, checkpointId: Id) => void = getUndefined,
  thenDeps: React.DependencyList = [],
): ParameterizedCallback<Parameter> => {
  const checkpoints = useCheckpointsOrCheckpointsId(checkpointsOrCheckpointsId);
  return useCallback(
    (parameter) =>
      ifNotUndefined(checkpoints, (checkpoints) =>
        ifNotUndefined(getCheckpointId(parameter as any), (checkpointId: Id) =>
          then(checkpoints.goTo(checkpointId), checkpointId),
        ),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkpoints, ...getCheckpointIdDeps, ...thenDeps],
  );
};

export const useUndoInformation: typeof useUndoInformationDecl = (
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): UndoOrRedoInformation => {
  const checkpoints = useCheckpointsOrCheckpointsId(checkpointsOrCheckpointsId);
  const [backwardIds, currentId] = useCheckpointIds(checkpoints);
  return [
    !arrayIsEmpty(backwardIds),
    useGoBackwardCallback(checkpoints),
    currentId,
    ifNotUndefined(currentId, (id) => checkpoints?.getCheckpoint(id)) ??
      EMPTY_STRING,
  ];
};

export const useRedoInformation: typeof useRedoInformationDecl = (
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): UndoOrRedoInformation => {
  const checkpoints = useCheckpointsOrCheckpointsId(checkpointsOrCheckpointsId);
  const [, , [forwardId]] = useCheckpointIds(checkpoints);
  return [
    !isUndefined(forwardId),
    useGoForwardCallback(checkpoints),
    forwardId,
    ifNotUndefined(forwardId, (id) => checkpoints?.getCheckpoint(id)) ??
      EMPTY_STRING,
  ];
};

export const useCheckpointIdsListener: typeof useCheckpointIdsListenerDecl = (
  listener: CheckpointIdsListener,
  listenerDeps?: React.DependencyList,
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): void =>
  useListener(
    'CheckpointIds',
    useCheckpointsOrCheckpointsId(checkpointsOrCheckpointsId),
    listener,
    listenerDeps,
  );

export const useCheckpointListener: typeof useCheckpointListenerDecl = (
  checkpointId: IdOrNull,
  listener: CheckpointListener,
  listenerDeps?: React.DependencyList,
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): void =>
  useListener(
    'Checkpoint',
    useCheckpointsOrCheckpointsId(checkpointsOrCheckpointsId),
    listener,
    listenerDeps,
    [checkpointId],
  );

export const useCreatePersister: typeof useCreatePersisterDecl = (
  store: Store,
  create: (store: Store) => Persister,
  createDeps: React.DependencyList = [],
  then?: (persister: Persister) => Promise<void>,
  thenDeps: React.DependencyList = [],
): Persister => {
  const [, setDone] = useState<1>();
  const persister = useMemo(
    () => create(store),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, ...createDeps],
  );
  useEffect(
    () => {
      (async () => {
        await then?.(persister);
        setDone(1);
        return;
      })();
      return () => {
        persister.destroy();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [persister, ...thenDeps],
  );
  return persister;
};
