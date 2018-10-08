import { User } from "../entity/User";
import { hash } from "bcryptjs";
import translateError from "../utils/translateError";

export default {
    Mutation: {
        async register(_: any, {email, password}: any)  {
            const hashPassword = await hash(password, 12);
            const user = User.create({
                email,
                password: hashPassword
            });
            const res = await user.save().catch(translateError("User save failed"));
            if (!res) throw new Error("User save failed");
            return true;
        } 
    }
}