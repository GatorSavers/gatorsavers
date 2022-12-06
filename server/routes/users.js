/* Code retrieved from https://www.mongodb.com/languages/mern-stack-tutorial, 11/21/2022
*  Jerami Soriano, 11/21/2022
* Server API Endpoint 
*/
const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// This section will help you get a list of all the records.
recordRoutes.route("/users").get(function (req, res) {
 let db_connect = dbo.getDb("GatorSaversInfo");
 db_connect
   .collection("user-model")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/users/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("user-model")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/users/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   username: req.body.name,
   password: req.body.password,
   first_name: req.body.first_name,
   last_name: req.body.last_name,
   dob: req.body.dob,
   email: req.body.email,
   favorites: req.body.favorites,
  };
 db_connect.collection("user-model").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    username: req.body.name,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    email: req.body.email,
    favorites: req.body.favorites,
   },
 };
 db_connect
   .collection("user-model")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("user-model").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;