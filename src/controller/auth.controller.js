const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
  //Hash password
  let hashPassword = bcrypt.hashSync(req.body.password, 8);
  //On passe les données à notre requete d'insertion
  const user = new User({
    email: req.body.email,
    password: hashPassword,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    admin: req.body.role,
  });
  //on sauvegarde les données saisies et on utilise le jwt
  user
    .save()
    .then((data) => {
      let usertoken = jwt.sign(
        {
          id: user._id,
          admin: user.admin,
        },
        "supersecret",
        {
          expiresIn: "1h",
          //algorithm: 'RS256'
        }
      );
      res.send({
        auth: true,
        token: usertoken,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.login = (req, res) => {
  //on récupère l'email stocké en base
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (!user) return res.status(400).send("No user found");

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid)
        return res.status(401).send({
          auth: false,
          token: null,
        });

      let usertoken = jwt.sign(
        {
          id: user._id,
          admin: user.admin,
        },
        "supersecret",
        {
          expiresIn: "1h",
        }
      );
      res.send({
        auth: true,
        token: usertoken,
      });
    }
  );
};
