import { FastifyInstance } from "fastify"
import Person from "../models/Person";
import Name from "../models/Name";
import Naming from "../models/Naming";

export default function PersonsController(fastify: FastifyInstance, opts, done) {
  fastify.get('/random', async (req, reply) => {
    const person = await Person.query().orderByRaw('RAND()').first();    
    reply.send(person);

    person.shownCount++;
    await person.$query().update(person);
  });

  fastify.put('/:id/report', async (req: any, reply) => {
    const person = await Person.query().findById(req.params.id);
    person.reportedCount++;
    await person.$query().update(person);
    reply.send(person);
  });

  fastify.put('/:id/skip', async (req: any, reply) => {
    const person = await Person.query().findById(req.params.id);
    person.skippedCount++;
    await person.$query().update(person);
    reply.send(person);
  });

  fastify.put('/:id/name/:nameId', async (req: any, reply) => {
    const name = await Name.query().findById(req.params.nameId);
    const person = await Person.query().findById(req.params.id);

    const naming = new Naming();
    naming.nameId = name.id;
    naming.personId = person.id;
    naming.userIdentifier = "TODO";

    await Promise.all([
      naming.$query().insert(naming),
      person.$query().update({ namedCount: ++person.namedCount })
    ]);
  });

  done()
}