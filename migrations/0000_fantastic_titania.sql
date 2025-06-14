CREATE TABLE "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"credits" integer DEFAULT 10 NOT NULL,
	"$createdAt" timestamp DEFAULT now(),
	"$updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
