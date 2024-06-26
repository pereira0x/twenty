import { PostgresTableSchemaColumn } from 'src/engine/metadata-modules/remote-server/types/postgres-table-schema-column';

export type DistantTables = {
  [tableName: string]: PostgresTableSchemaColumn[];
};
