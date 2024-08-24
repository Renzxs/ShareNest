// Imports (Dependencies, Packages and etc.)
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

// Middlewares
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: '*',
    methods: 'GET, POST, DELETE, PUT, PATCH',
}));


// Port Configuration
app.listen(process.env.SERVER_PORT, () => {
    try {
        console.log(`Server running on port ${process.env.SERVER_PORT}`);
    }
    catch(error) {
        console.log("Internal Server Error.")
    }
});