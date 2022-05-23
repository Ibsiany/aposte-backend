module.exports = [
    {
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: process.env.POSTGRESQL_PORT,
      username: 'postgres',
      password: process.env.POSTGRESQL_PASSWORD,
      database: 'postgres',
      synchronize: false,
      logging: false,
      migrationsTableName: 'migration',
      entities: ['src/modules/**/infra/typeorm/entities/*.ts'],
      migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
      cli: {
        entitiesDir: 'src/modules/**/infra/typeorm/entities',
        migrationsDir: 'src/shared/infra/typeorm/migrations',
      },
    }
  ]
  