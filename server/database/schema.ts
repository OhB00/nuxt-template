import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as s from "drizzle-orm/sqlite-core"

export const users = table(
    "users",
    {
        id: s.integer('id').primaryKey(),        
        username: s.text('username', { length: 30 }).notNull(),
        email: s.text('email', { length: 75 }).notNull(),
        password: s.text('password').notNull(),
    },
    t => [
        s.uniqueIndex('username_idx').on(t.username),
        s.uniqueIndex('email').on(t.email)
    ]
)