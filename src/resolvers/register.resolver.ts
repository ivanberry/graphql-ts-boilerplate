export default {
    Mutation: {
        register(_: any, {email, password}: any)  {
            console.log(email, password);
            return true;
        } 
    }
}