import {Entity, model, property} from '@loopback/repository';

@model()
export class Medicos extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    default: null,
  })
  img?: string;

  @property({
    type: 'object',
    required: true,
  })
  usuario: object;

  @property({
    type: 'object',
    required: true,
  })
  hospital: object;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Medicos>) {
    super(data);
  }
}

export interface MedicosRelations {
  // describe navigational properties here
}

export type MedicosWithRelations = Medicos & MedicosRelations;
