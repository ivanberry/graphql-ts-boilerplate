// what should of login mutaion
export default {
    Mutaion: {
        login(_: any, {email, password}: any) {
            console.log(email, password);
            // what should we do to handle login mutation?
            // Maybe: 
            // 0. get the query argments
            // 1. check the password with database hashed pasword
            // 2. if success, then return login status true
            // 3. fail, then throw some error!
        }
    }
}
