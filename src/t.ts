import * as bcrypt from "bcryptjs";
import { IResolvers } from "graphql-yoga/dist/types";
import {User} from "./entity/User";

export const resolvers: IResolvers = {
  Mutation: {
    register: async (_, { email, password }: any) => {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = User.create({
        email,
        password: hashPassword
      });

      await user.save();
      return true;
    }
  }
};
