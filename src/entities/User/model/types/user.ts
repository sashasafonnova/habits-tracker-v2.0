export interface User {
   id: string;
   name: string;
   email: string;
   token: string;
}


export interface UserSchema {
   authData?: User;
}