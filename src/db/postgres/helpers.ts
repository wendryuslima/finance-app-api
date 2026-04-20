import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DATABASE,
});

export const PostgresHelper = {
  query: async (query: string, params: string[]) => {
    const client = await pool.connect();
    await client.release();
    const result = await client.query(query, params);
    return result.rows;
  },
};
