const connection = require("./connection")

const orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })}
    // ,
    // insertOne(burger, values) {
    //     return this.connection.query(`INSERT INTO burgers (${burger}) VALUES (${values})`)
    // }
    // updateOne(column, id, value) {
    //     return this.connection.query(`UPDATE burgers SET ${column} = ${value} WHERE id = ${id}`)
    // }
}

module.exports = orm