const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password:'pghil147',
    host: 'localhost',
    port: '5432',
    database: 'launchstoredb'
})