const mysql =  require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "burgers"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connected to mysql")
})

module.exports = connection;