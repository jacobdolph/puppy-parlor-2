module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "puppy_parlor_db",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: 1
  },
  test: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "puppy_parlor_db_test",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: 1
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
    operatorsAliases: 1
  }
}