import { drizzle } from 'drizzle-orm/d1'
export { sql, eq, and, or, count, inArray, like, getTableColumns, aliasedTable, desc, asc } from 'drizzle-orm'

import * as schema from '../database/schema'

export const tables = schema

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema, logger: import.meta.dev})
}

export type NewUser = typeof schema.users.$inferInsert
export type User = typeof schema.users.$inferSelect