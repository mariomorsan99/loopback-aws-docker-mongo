import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Medicos} from '../models';
import {MedicosRepository} from '../repositories';

export class MedicosController {
  constructor(
    @repository(MedicosRepository)
    public medicosRepository : MedicosRepository,
  ) {}

  @post('/medicos', {
    responses: {
      '200': {
        description: 'Medicos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Medicos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medicos, {
            title: 'NewMedicos',
            exclude: ['id'],
          }),
        },
      },
    })
    medicos: Omit<Medicos, 'id'>,
  ): Promise<Medicos> {
    return this.medicosRepository.create(medicos);
  }

  @get('/medicos/count', {
    responses: {
      '200': {
        description: 'Medicos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Medicos) where?: Where<Medicos>,
  ): Promise<Count> {
    return this.medicosRepository.count(where);
  }

  @get('/medicos', {
    responses: {
      '200': {
        description: 'Array of Medicos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Medicos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Medicos) filter?: Filter<Medicos>,
  ): Promise<Medicos[]> {
    return this.medicosRepository.find(filter);
  }

  @patch('/medicos', {
    responses: {
      '200': {
        description: 'Medicos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medicos, {partial: true}),
        },
      },
    })
    medicos: Medicos,
    @param.where(Medicos) where?: Where<Medicos>,
  ): Promise<Count> {
    return this.medicosRepository.updateAll(medicos, where);
  }

  @get('/medicos/{id}', {
    responses: {
      '200': {
        description: 'Medicos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Medicos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Medicos, {exclude: 'where'}) filter?: FilterExcludingWhere<Medicos>
  ): Promise<Medicos> {
    return this.medicosRepository.findById(id, filter);
  }

  @patch('/medicos/{id}', {
    responses: {
      '204': {
        description: 'Medicos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medicos, {partial: true}),
        },
      },
    })
    medicos: Medicos,
  ): Promise<void> {
    await this.medicosRepository.updateById(id, medicos);
  }

  @put('/medicos/{id}', {
    responses: {
      '204': {
        description: 'Medicos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() medicos: Medicos,
  ): Promise<void> {
    await this.medicosRepository.replaceById(id, medicos);
  }

  @del('/medicos/{id}', {
    responses: {
      '204': {
        description: 'Medicos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.medicosRepository.deleteById(id);
  }
}
