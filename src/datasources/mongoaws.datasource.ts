import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoaws',
  connector: 'mongodb',
  url: '',
  host: '3.128.203.128',
  port: 27017,
  user: 'AdminMongoDb',
  password: 'lunasa19',
  database: 'hospitalDB',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoawsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoaws';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoaws', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
