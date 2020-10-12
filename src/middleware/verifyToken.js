const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(400).send({
      auth: false,
      message: "Missing token",
    });
  }
  jwt.verify(token, "supersecret", (err, decoded) => {
    if (err) {
      return res.status(401).send({
        auth: false,
        message: "No authorized",
      });
    }
    req.user = decoded;
    next();
  });
}
module.exports = verifyToken;
