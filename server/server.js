import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import { kpis, products, transactions } from "./data/data.js";

// importing mockup data kpis array of objects from data.js
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import User from "./models/userSchema.js";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";


/* CONFIGURATIONS */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
// entry point for the kpi, product and transaction routes

const blacklistedTokens = [];


/* MONGOOSE SETUP */

const PORT = 3000;
mongoose
  .connect('mongodb+srv://sedivka9108:SjCR2RnKE5il1592@cluster0.rkeb63t.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server connected to Port: ${PORT} and MongoDB`));

    //     /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();

    // before seeding the db dropping the current db - avoiding dev duplication

    // KPI.insertMany(kpis);
    //inserting the kpis array of objects into the database

    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect to MongoDB`));

/*express - framework for node.js to handle APIs, body-parser  handle informations that are coming from a body of request, 
cors - crossorigin research sharing request for calls from dif url, dotenv -handle environment variables, helmet - api endpoint security,
 morgan for handling console.logs*/

 //POST REGISTER USER
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
      return res.status(401).json({ error: "Invalid username" });
    }
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, 'somestrSDSingtoguesss', {expiresIn: "1hr" });
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