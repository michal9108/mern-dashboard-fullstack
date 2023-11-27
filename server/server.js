import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/userSchema.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
// connect to express app
app.use(express.json());

app.use(cors());
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const blacklistedTokens = [];

/* MONGOOSE SETUP */
const PORT2 = process.env.PORT2 || 9001;
mongoose
  .connect(process.env.MONGO_URL2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT2, () => {
      console.log("Server connected to port 8081 and MongoDb");
    });
  })
  .catch((error) => {
    console.log("Unable to connect to Server and/or MongoDB", error);
  });



//POST REGISTER
app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

//GET Registered Users
app.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
});

//LOGIN

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET2, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

//LOGOUT

app.post("/logout", (req, res) => {
  try {
    const { token } = req.body;
    // Add the token to the blacklist array
    blacklistedTokens.push(token);
    res.json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging out" });
  }
});
