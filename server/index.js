import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

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

// console.log("Hello")


// /* ROUTES */

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

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
    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
    Product.insertMany(products);
    Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));














/* MONGOOSE SETUP */

// const PORT = process.env.PORT || 9000;

// mongoose
//   .createConnection(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((db) => {
//     app.listen(PORT, () => {
//       console.log(`Server Port: ${PORT}`);
//       // You can now use the 'db' connection object here for your models
//     });
//   })
//   .catch((error) => console.log(`${error} did not connect`));


/* MONGOOSE SETUP */

// const PORT = process.env.PORT || 9000;

// const db = mongoose.createConnection(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// db.on('error', (error) => {
//   console.error(`${error} did not connect`);
// });

// db.once('open', () => {
//   console.log('MongoDB connected successfully');
//   app.listen(PORT, () => {
//     console.log(`Server Port: ${PORT}`);
//   });
// });



















// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sedivka9108:R82Vxe3B<&3_!pN@cluster0.rkeb63t.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
