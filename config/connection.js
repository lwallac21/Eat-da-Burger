const mysql =  require("mysql")

const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "bbef298c78fd69",
    password: "b674f874",
    database: "heroku_0558c3aa6656875"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connected to mysql")
})



module.exports = connection;