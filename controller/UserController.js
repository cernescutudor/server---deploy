import {
  usernameTakenDB,
  emailTakenDB,
  getPasswordDB,
  getUserByUsernameDB,
  addUserDB,
} from "../repository/UserRepo.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const user = req.body;
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const validationResult = await validateUserRegistration(user);
  if (validationResult !== true) {
    res.status(400).send(validationResult);
    return;
  }
  user.password = hashedPassword;
  addUserDB(user).then((user) => res.send("Account registered successfully"));
};

export const loginUser = async (req, res) => {
  const user = req.body;
  const hashedPasswordDB = await getPasswordDB(user.username);
  if (user.username === "" || user.password === "") {
    res.status(400).send("Invalid credientials");
    return;
  }
  if (hashedPasswordDB === false) {
    res.status(400).send("Invalid credientials");
    return;
  }
  const passwordMatch = await bcrypt.compare(user.password, hashedPasswordDB);
  if (!passwordMatch) {
    res.status(400).send("Incorrect password");
    return;
  }
  const userDB = await getUserByUsernameDB(user.username);
  const token = jwt.sign({ id: userDB.UserID }, "secret_key", {
    expiresIn: "1h",
  });
  console.log(token);
  res.json({ token });
};

const validateUserRegistration = async (user) => {
  if (user.username === "") {
    return "Username cannot be empty";
  }
  if (user.password === "") {
    return "Password cannot be empty";
  }
  if (user.email === "") {
    return "Email cannot be empty";
  }
  //check if the username already exists
  const usernameExists = await usernameTakenDB(user.username);
  if (usernameExists) {
    return "Username already exists";
  }
  //check if the email already exists
  const emailExists = await emailTakenDB(user.email);
  if (emailExists) {
    return "Email already exists";
  }
  // use the regex to validate the email, format: ^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
  if (!emailRegex.test(user.email)) {
    return "Invalid email format";
  }
  if (user.password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return true;
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
      const token = authHeader.split(' ')[1];

      console.log(token);
      if(token === 'null' || token === 'undefined') {
          res.sendStatus(401);
          return;
      }
      jwt.verify(token, 'secret_key', (err, user) => {
          if (err) {
              console.log(err);
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};


