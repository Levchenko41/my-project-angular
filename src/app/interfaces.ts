export interface User{
email:string
password:string

}

export interface UserData{
name:string
lastName:string
email:string
password:string
role:string
}

export interface UserDataAll{
    createdAt: string
    email: string
    id: number
    lastName: string
    name:string
    password: string
    role: string
    updatedAt: string
}

export interface DecodeTokenData{
email: string
exp: any
iat:any
id:number
role: string
}

export const myFriends = [
    {
      id: 1,
      name:'Nick',
      lastName:"Bas"
    }
  ];