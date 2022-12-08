const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "maindatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get/register", function (req, res) {
  const sqlSelect = "SELECT * FROM  users";
  db.query(sqlSelect, function (err, result) {
    res.send(result);
  });
});

app.get("/api/get/bikes", function (req, res) {
  const sqlSelect = "SELECT * FROM  bikes";
  db.query(sqlSelect, function (err, result) {
    res.send(result);
  });
});

app.post("/api/insert/register", function (req, res) {
  const full_name = req.body.full_name;
  const password = req.body.password;
  const email = req.body.email;
  const cpf = req.body.cpf;
  const birthdate = req.body.birthdate;
  const cellphone = req.body.cellphone;
  const city = req.body.city;

  const sqlInsert =
    "INSERT INTO users (full_name, password, email, cpf, birthdate, cellphone, city) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [full_name, password, email, cpf, birthdate, cellphone, city],
    function (err, result) {
      console.log(err);
    }
  );
});

app.post("/api/insert/bike", function (req, res) {
  const id = req.body.id;
  const description = req.body.description;
  const locator = req.body.locator;
  const city = req.body.city;
  const state = req.body.state;
  const price = req.body.price;
  const photo = req.body.photo;

  const sqlInsert =
    "INSERT INTO bikes (id, description, locator, city, state, price, photo) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [id, description, locator, city, state, price, photo],
    function (err, result) {
      console.log(err);
    }
  );
});

app.delete("/api/delete/:full_name", function (req, res) {
  const full_name = req.params.full_name;
  const sqlDelete = "DELETE FROM users WHERE full_name = ?";

  db.query(sqlDelete, full_name, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

app.delete("/api/delete/bike/:locator", function (req, res) {
  const locator = req.params.locator;
  const sqlDelete = "DELETE FROM bikes WHERE locator = ?";

  db.query(sqlDelete, locator, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

app.put("/api/update/user", function (req, res) {
  const full_name = req.body.full_name;
  const password = req.body.password;
  const email = req.body.email;
  const cellphone = req.body.cellphone;
  const sqlUpdate =
    "UPDATE users SET password = ?, email = ?, cellphone = ? WHERE full_name = ?";

  db.query(
    sqlUpdate,
    [password, email, cellphone, full_name],
    function (err, result) {
      console.log(result);
    }
  );
});

app.put("/api/update/bike", function (req, res) {
  const locator = req.body.locator;
  const description = req.body.description;
  const price = req.body.price;
  const photo = req.body.photo;
  const sqlUpdate =
    "UPDATE bikes SET description = ?, price = ?, photo = ? WHERE locator = ?";

  db.query(
    sqlUpdate,
    [description, price, photo, locator],
    function (err, result) {
      console.log(result);
    }
  );
});

app.listen(3001, function () {
  console.log("The server is listening on port 3001");
});
