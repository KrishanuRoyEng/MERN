const jwt = require("jsonwebtoken");
const { generateResponse } = require("../utils/helper");
//Configuration file
const config = require("config");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json(generateResponse(false, "Access token required", null, 401));
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET ||
      config.get("auth.jwt_secret") ||
      "f394bbb4e36946fea3981bb81fe0ba2b0fe281dc2c77845c9f4cee2dd51ec32",
    (err, user) => {
      if (err) {
        return res
          .status(403)
          .json(generateResponse(false, "Invalid or expired token", null, 403));
      }
      req.user = user;
      next();
    }
  );
};

const login = (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@example.com" && password === "admin123") {
    const token = jwt.sign(
      {
        id: 1,
        email,
        rule: "admin",
      },
      process.env.JWT_SECRET ||
        config.get("auth.jwt_secret") ||
        "f394bbb4e36946fea3981bb81fe0ba2b0fe281dc2c77845c9f4cee2dd51ec32",
      { expiresIn: "15m" }
    );
    res.json(generateResponse(true, "Login successful", { token }, 200));
  } else {
    res
      .status(401)
      .json(generateResponse(false, "Invalid credentials", null, 401));
  }
};

module.exports = {
  authenticateToken,
  login,
};
