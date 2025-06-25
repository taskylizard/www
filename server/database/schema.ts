import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const artwork = sqliteTable('artwork', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  data: text('data').notNull().$type<Uint8Array>()
})
