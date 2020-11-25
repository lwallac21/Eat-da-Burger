const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("/public"))
app.use(bodyParser.json());
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");
const methodOverride = require("method-override")
app.use(methodOverride('_method'))
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});