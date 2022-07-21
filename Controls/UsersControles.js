import Users from "../Models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const SECRET = process.env.SECRET;

export const Register = async (req, res) => {
  const newData = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  };

  try {
    Users.create(newData, (err, user) => {
      if (err && err.code === 11000) {
        res.status(400).json({
          message: "Email already exists",
        });
      }

      if (err) return res.status(500).json("Server error");

      const expiresIn = 24 * 60 * 60;
      const accestoken = jwt.sign({ id: user._id }, SECRET, {
        expiresIn: expiresIn,
      });

      const dataUser = {
        name: user.name,
        email: user.email,
        pic: user.pic,
        accestoken: accestoken,
        expiresIn: expiresIn,
      };

      res.send({ dataUser });
    });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  console.log(req.body);
  const dataUser = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    Users.findOne({ email: dataUser.email }, (err, user) => {
      if (err) return res.status(500).json("Server error");

      if (!user) {
        res.status(409).send({ message: "Something an wrong" });
      } else {
        const resultPassword = bcrypt.compareSync(
          dataUser.password,
          user.password
        );

        if (resultPassword) {
          const expiresIn = 24 * 60 * 60;
          const accesToken = jwt.sign({ id: user._id }, SECRET, {
            expiresIn: expiresIn,
          });

          const dataUser = {
            name: user.name,
            email: user.email,
            accesToken: accesToken,
            expiresIn: expiresIn,
          };

          res.send({ dataUser });
        } else {
          res.status(404).send({ message: "Something an wrong" });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
