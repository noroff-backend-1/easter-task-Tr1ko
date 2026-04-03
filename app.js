const express = require("express");
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("./swagger-output.json")
const jwt = require("jsonwebtoken");
const eggRoutes = require("./routes/eggRoutes")
const app = express();

app.use(express.json());
app.use("/eggs", eggRoutes);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req, res) => {
    res.send("API is running")
});

app.post("/login", (req, res) => {
    const token = jwt.sign(
        { status: "LOGGED_IN" },
        "secret"
    );

    res.json({ token })
});

module.exports = app;