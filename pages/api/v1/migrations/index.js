import pkg from "node-pg-migrate";
import { join } from "node:path";
const { default: run } = pkg;

export default async function migrations(req, res) {
  if (req.method === "GET") {
    console.log(run);
    const migrations = await run({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });

    return res.status(200).json(migrations);
  }

  if (req.method === "POST") {
    const migrations = await run({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: false,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });
    return res.status(200).json(migrations);
  }
  return res.status(405).end();
}
