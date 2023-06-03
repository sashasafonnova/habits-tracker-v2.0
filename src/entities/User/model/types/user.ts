export interface User {
   id: string;
   firstName: string;
   email: string;
   token: string;
}


export interface UserSchema {
   authData?: User;
}