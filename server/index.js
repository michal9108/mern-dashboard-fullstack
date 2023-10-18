import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";
// importing mockup data kpis array of objects from data.js 
import { products } from "./data/data.js";
import Product from "./models/Product.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import Transaction from "./models/Transaction.js";
import { transactions } from "./data/data.js";


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




 /* ROUTES */

 app.use("/kpi", kpiRoutes);
 app.use("/product", productRoutes);
 app.use("/transaction", transactionRoutes);
 // entry point for the kpi, product and transaction routes


/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//     /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();

    // before seeding the db dropping the current db - avoiding dev duplication

    // KPI.insertMany(kpis);
//inserting the kpis array of objects into the database

    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));


/*express - framework for node.js to handle APIs, body-parser  handle informations that are coming from a body of request, 
cors - crossorigin research sharing request for calls from dif url, dotenv -handle environment variables, helmet - api endpoint security,
 morgan for handling console.logs*/
