import { Resource as TypeOrmResource } from '@adminjs/typeorm'
import { BaseRecord } from 'adminjs'

type IdsType = { id: string | number } | string | number

export class CustomResource extends TypeOrmResource {
  titleField() {
    return this.decorate().titleProperty().name()
  }

  wrapObjects(objects) {
    return objects.map(
      (sequelizeObject) => new BaseRecord(sequelizeObject.toJSON(), this),
    )
  }

  async saveRecords(record, resourceId, ids: IdsType | IdsType[]) {
    if (!Array.isArray(ids)) {
      await this.update(record.params.id, {
        [resourceId]: ids,
      })
    } else {
      await this.update(record.params.id, {
        [resourceId]: ids.map((value: { id: string | number }) => ({
          id: value.id,
        })),
      })
    }
  }

  primaryKeyField() {
    return this.id
  }

  getManyReferences() {
    return this.decorate()
      .getProperties({ where: 'edit' })
      .filter((p: any) => {
        return p.type() === 'reference'
      })
      .map((p) => p.reference())
  }

  getManyProperties() {
    return this.decorate()
      .getProperties({ where: 'edit' })
      .filter((p: any) => {
        return p.type() === 'reference'
      })
      .map((p) => p.name())
  }
}
