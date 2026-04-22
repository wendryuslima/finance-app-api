import { PostgresHelper } from "../../db/postgres/helpers.js";

export interface CreateUserRepository {
  ID: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
}

export class PostgresCreateUserRepository {
  async execute(params: CreateUserRepository) {
    const results = await PostgresHelper.query(
      "INSERT INTO users (ID, first_name, last_name, name, email, password) VALUES ($1, $2, $3, $4, $5)",
      [
        params.ID,
        params.firstName,
        params.lastName,
        params.name,
        params.email,
        params.password,
      ],
    );

    return results[0];
  }
}
