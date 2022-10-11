import BaseModel from "./BaseModel";

export default class Name extends BaseModel {
    static tableName = 'names'

    name!: string
}