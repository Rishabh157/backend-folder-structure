const routes = require('express').Router()

const adminRoutes = require("./AdminUser")


routes.use("/admin", adminRoutes)

module.exports = routes;
