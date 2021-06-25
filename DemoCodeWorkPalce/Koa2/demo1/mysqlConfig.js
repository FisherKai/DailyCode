let mysql = require('mysql');
let dbConfig = require('./config').database;

let pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.databasename
});

let allServices = {

    query: async function (sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {

                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })

    },
    findUserAll: async function () {
        let _sql = `select * from user;`
        return await allServices.query(_sql)
    },
}

module.exports = {
    allServices
}