import BaseModel from "./BaseModel";
import Naming from "./Naming";

export default class Person extends BaseModel {
  static tableName = "persons";

  namings: Naming[];

  reportedCount: number = 0;
  skippedCount: number = 0;
  shownCount: number = 0;
  namedCount: number = 0;

  static relationMappings = () => ({
    namings: {
      relation: BaseModel.HasManyRelation,
      modelClass: Naming,

      join: {
        from: "Person.id",
        to: "Naming.personId",
      }
    }
  });
}
