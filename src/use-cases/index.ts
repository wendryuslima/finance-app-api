import {
  CreateUserRepository,
  PostgresCreateUserRepository,
} from "../repositories/postgress/create-user.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export class CreateUseUseCase {
  async execute(CreateUserRepository: CreateUserRepository) {
    const userId = uuidv4();
    const hashEncriptedPassword = await bcrypt.hash(
      CreateUserRepository.password,
      10,
    );

    const user = {
      ...CreateUserRepository,
      ID: userId,
      password: hashEncriptedPassword,
    };

    const createUserRepository = new PostgresCreateUserRepository();
    const createdUser = await createUserRepository.execute(user);
    return createdUser;
  }
}
