import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize"

export interface UserInterface extends Model/*<InferAttributes<UserInterface>, InferCreationAttributes<UserInterface>>*/ {
  id: number,
  first_name: string,
  last_name: string,
  city: string,
  country: string,
  zipcode: string,
  phone_number: string,
  birthdate: string,
  email: string,
  password: string,
  roleId: number
}