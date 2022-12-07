/* Connection via Node JS */
const session = require("express-session")
const express = require("express");
const cors = require("cors");
require("dotenv").config({path: "./.env"});
const port = process.env.port || 5000;
const mongoose = require("mongoose")
const MongoDBStore = require("connect-mongodb-session")(session)
const loginRouter = require("./routes/user-route")

const app = express();
const MAX_AGE = 1000 * 60 * 60 * 3
// driver connection

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

mongoose.Promise = global.Promise
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
})

const mongoDBStore = new MongoDBStore({
    uri: process.env.ATLAS_URI,
    collection: 'GatorSaversInfo',
})

app.use(
    session({
        secret: 'as3fdfk18dj3tn',
        name: 'session-id',
        store: mongoDBStore,
        cookie: {
            maxAge: MAX_AGE,
            sameSite: false,
            secure: false,
        },
        resave: true,
        saveUninitialized: false,
    })
)

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api', loginRouter)

app.listen(port, () => {
    // Perform a connection when the server starts
    //dbo.connectToServer(function (err) {
    //    if (err) console.error(err);
    //});
    console.log(`Server is running on port ${port}`);
});