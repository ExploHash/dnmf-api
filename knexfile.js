module.exports = {
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
  migrations: {
    tableName: "knex_migrations",
  },
};
