import {pgTable, uuid, varchar} from "drizzle-orm/pg-core";

export type Player = typeof players.$inferSelect
export type NewPlayer = typeof players.$inferInsert

export const players = pgTable("players", {
    id: uuid("userID").primaryKey().notNull().unique(),
    name: varchar("name", { length: 30 }).notNull(),
    password: varchar("password", { length: 50 }).notNull(),
})