import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  // needed for gen_random_uuid()
  await db.executeQuery(
    sql`CREATE EXTENSION IF NOT EXISTS pgcrypto`.compile(db),
  );

  // project status enum
  await db.executeQuery(
    sql`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'project_status') THEN
        CREATE TYPE project_status AS ENUM (
          'planning',
          'active',
          'on_hold',
          'completed',
          'cancelled'
        );
      END IF;
    END
    $$;
  `.compile(db),
  );

  // inspection status enum
  await db.executeQuery(
    sql`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'inspection_status') THEN
        CREATE TYPE inspection_status AS ENUM (
          'scheduled',
          'in_progress',
          'passed',
          'failed',
          'cancelled'
        );
      END IF;
    END
    $$;
  `.compile(db),
  );
}

export async function down(db: Kysely<any>): Promise<void> {
  // tables must be dropped before types, but your order (003 down, 002 down, 001 down) handles that.
  await db.executeQuery(
    sql`DROP TYPE IF EXISTS inspection_status;`.compile(db),
  );
  await db.executeQuery(sql`DROP TYPE IF EXISTS project_status;`.compile(db));

  // usually you don't drop extensions in down, but you can if you want:
  // await db.executeQuery(sql`DROP EXTENSION IF EXISTS pgcrypto;`.compile(db));
}
