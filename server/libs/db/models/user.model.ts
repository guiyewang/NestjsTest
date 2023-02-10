import { prop } from "@typegoose/typegoose";


export class User{
    @prop()
    userName:string

    @prop()
    pasword:string
}