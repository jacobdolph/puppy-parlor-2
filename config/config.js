module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "puppy_parlor2_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "puppy_parlor2_db_test",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"

  }
}