import express = require('express');
import path = require('path')

const app: express.Application = express();

let getMainDirectory = (folderName: string) => {
    const currpath = __dirname.replace(/\\/g, "/")
    const strs = currpath.split("/")
    //Outside of repo directory, into keys directory.
    if (strs.includes("build")) {
        return path.join(__dirname, "..", "..", folderName)
    } else {
        console.log(path.join(__dirname, "..", folderName))
        return path.join(__dirname, "..", folderName)
    }
}
app.use(express.static(getMainDirectory("build")))
app.use(express.static(getMainDirectory("assets")))
// const indexpath = path.resolve(path.join(getMainDirectory("build"), "index.html"))

app.listen(8000, () => {
    console.log("Listening on port 8000")
})
