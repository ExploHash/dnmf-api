import { FastifyInstance } from "fastify"
import Name from "../models/Name";

export default function NamesController(fastify: FastifyInstance, opts, done) {
  fastify.get('/', async (req, reply) => {
    const names = await Name.query().select('id', 'name');
    reply.send(names);
  });

  fastify.get("/autocomplete", async (req: any, reply) => {
    const names = await Name.query()
      .select("id", "name")
      .where("name", "like", `${req.query.q}%`)
      .limit(10);
      
    reply.send(names);
  });

  done()
}