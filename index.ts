import "dotenv/config";

import express from "express";
import { PostgresHelper } from "./src/db/postgres/helpers.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const results = await PostgresHelper.query("SELECT * FROM users", []);

  res.send(JSON.stringify(results));
});

app.listen(Number(process.env.PORT), () => {
  console.log("Server is running on port " + process.env.PORT);
});
