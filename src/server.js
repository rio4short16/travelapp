const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path");
const session = require('express-session');

const app = express()


/* Session */
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

/* Static Files */
app.use(express.static('public')) //public folder
app.use('/css', express.static(__dirname + 'frontend/public/css')) //CSS
app.use('/js', express.static(__dirname + 'frontend/public/js')) //JS
app.use('/img', express.static(__dirname + 'frontend/public/img')) //IMG

/* Frontend */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "frontend/views"));
/* Serve Static Files */
app.use("/public", express.static(path.join(__dirname, "frontend/public")));

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/*  */