import {DefaultCrudRepository} from '@loopback/repository';
import {Medicos, MedicosRelations} from '../models';
import {MongoawsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MedicosRepository extends DefaultCrudRepository<
  Medicos,
  typeof Medicos.prototype.id,
  MedicosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoawsDataSource,
  ) {
    super(Medicos, dataSource);
  }
}
