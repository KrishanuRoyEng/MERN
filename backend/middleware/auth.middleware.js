const jwt = require("jsonwebtoken");
const { generateResponse } = require("../utils/helper");

const authMiddleware = (req, res, next) => {};
const authorize = (roles)=>{};

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
  authMiddleware,
  authorize,
  login,
};
