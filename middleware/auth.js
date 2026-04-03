const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("AUTH HEADER:", authHeader);

  if (!authHeader) return res.sendStatus(401);

  // ✅ Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    jwt.verify(token, "secret");
    next();
  } catch (err) {
    console.error("JWT ERROR:", err);
    res.sendStatus(401);
  }
};