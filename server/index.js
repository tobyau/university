const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { Student } = require("./models");
const { Campus } = require("./models");


app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());


app.use("/api", require("./api"));


Student.sync().then(() => console.log("student tables created!"));
Campus.sync().then(() => console.log("campus tables created!"));

app.listen(8080, () => {
  console.log("App is listening on port 8080");
});
