const express = require("express")
const path = require("path")
require("dotenv").config()

const app = express()

const publicDirectoryPath = path.join(__dirname, "/public")

console.log("__dirname: ", __dirname)
console.log("--publicDirectoryPath: ", publicDirectoryPath)

//use index.html page and display it when server starts
app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})