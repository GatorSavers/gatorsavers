/* Connection via Node JS */
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./.env"});
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

// driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // Perform a connection when the server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port ${port}`);
});