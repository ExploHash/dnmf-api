import { Model } from 'objection'

export default class BaseModel extends Model {
  id!: number
  createdAt!: Date
  updatedAt!: Date

  $beforeInsert() {
    this.createdAt = new Date();
  }

  $beforeUpdate() {
    this.updatedAt = new Date();
  }
}
