"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var getMainDirectory = function (folderName) {
    var currpath = __dirname.replace(/\\/g, "/");
    var strs = currpath.split("/");
    //Outside of repo directory, into keys directory.
    if (strs.includes("build")) {
        return path.join(__dirname, "..", "..", folderName);
    }
    else {
        console.log(path.join(__dirname, "..", folderName));
        return path.join(__dirname, "..", folderName);
    }
};
app.use(express.static(getMainDirectory("build")));
app.use(express.static(getMainDirectory("assets")));
// const indexpath = path.resolve(path.join(getMainDirectory("build"), "index.html"))
app.listen(8000, function () {
    console.log("Listening on port 8000");
});
