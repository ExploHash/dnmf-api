import Person from "./Person";
import BaseModel from "./BaseModel";
import Name from "./Name";

export default class Naming extends BaseModel {
  static tableName = "namings";

  name: Name;
  person: Person;
  userIdentifier: string;

  personId: number;
  nameId: number;


  static relationMappings = () => ({
    name: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Name,

      join: {
        from: "Naming.nameId",
        to: "Name.id",
      },
    },

    person: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Person,

      join: {
        from: "Naming.personId",
        to: "Person.id",
      },
    },
  });
}
