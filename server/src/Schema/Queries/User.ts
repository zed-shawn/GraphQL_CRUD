import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";

export const GET_ALL_USERS = {
  type: GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};
