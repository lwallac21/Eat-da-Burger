const mysql =  require("mysql")
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
connection = mysql.createConnection({
    host: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "	lkpptjlfmzbpoc1n",
    password: "	xfrb42i6x4er9h7j",
    port:"3306",
    database: "l3vkgy69z9hgk43i"
});
}
connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connected to mysql")
})



module.exports = connection;