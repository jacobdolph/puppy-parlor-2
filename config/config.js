module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "y15u3s3akqakrx9w",
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
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",

  }
}