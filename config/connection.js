const mysql =  require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.DATABASE_URL || 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connected to mysql")
})

module.exports = connection;