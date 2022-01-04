const express = require("express")
require("dotenv").config()
const app = express()

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(3000)