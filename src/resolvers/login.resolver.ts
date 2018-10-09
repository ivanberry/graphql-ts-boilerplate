import { User } from "../entity/User";
import translateError from "../utils/translateError";
import { compare } from "bcryptjs";
// import { compare } from "bcryptjs";

// what should of login mutaion
export default {
    Mutation: {
        async login(_: any, {email, password}: any) {
            // what should we do to handle login mutation?
            // Maybe: 
            // 0. get the query argments
            // 1. check the password with database hashed pasword
            // 2. if success, then return login status true
            // 3. fail, then throw some error!
            const user = await User.findOne({email}).catch(translateError("user do not exists!"));
            if (!user) throw new Error("user do not exists!");
            const isExits = await compare(password, user.password);
            if (isExits) {
                return true;
            } else {
                throw new Error("Password error!");
            }
            // maybe need manage the login status like session or something
        }
    }
}
