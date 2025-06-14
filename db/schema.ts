import { pgTable, integer, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    credits: integer('credits').notNull().default(10),
    $createdAt: timestamp('$createdAt').defaultNow(),
    $updatedAt: timestamp('$updatedAt').defaultNow().$onUpdate(() => new Date()),
});
