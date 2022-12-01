const express = require("express")
require('./database/mongo')
const v1routes = require('./api/v1/routes')

const app = express()

app.use("/v1", v1routes)
module.exports = app;