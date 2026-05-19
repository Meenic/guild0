import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("[db] DATABASE_URL is required");
}

export const db = drizzle(databaseUrl, { schema });
