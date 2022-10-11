import Knex from 'knex'
import { Model } from 'objection'
import fastify from 'fastify'
import SpawnNewPersonJob from './jobs/SpawnNewPersonJob';

import NamesController from './controllers/NamesController';
import PersonsController from './controllers/PersonsController';

// Initialize knex.
const knex = Knex({
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "dnmf",
      password: "dnmf",
      database: "dnmf",
    },
    pool: {
      min: 2,
      max: 10,
    },
});

Model.knex(knex)
//Initialize jobs
// SpawnNewPersonJob.run();

//Initialize fastify
const server = fastify();
server.register(NamesController, { prefix: '/names' })
server.register(PersonsController, { prefix: '/persons' })

server.listen({ port: 3000 })