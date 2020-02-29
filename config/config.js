module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "puppy_parlor_db",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: true
  },
  test: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "puppy_parlor_db_test",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: true
  },
  production: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "puppy_parlor_db_production",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: true
  }
}