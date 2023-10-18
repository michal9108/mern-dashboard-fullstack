import mongoose from "mongoose";

const Schema = mongoose.Schema;

const daySchema = new Schema({
  date: Date,
  revenue: Number,
  expenses: Number,
});

const monthSchema = new Schema({
  month: String,
  revenue: Number,
  expenses: Number,
  operationalExpenses: Number,
  nonOperationalExpenses: Number,
});

const KPISchema = new Schema(
  {
    totalProfit: Number,
    totalRevenue: Number,
    totalExpenses: Number,
    expensesByCategory: {
      type: Map,
      of: Number,
    },
      monthlyData: [monthSchema],
      dailyData: [daySchema],
  },
  { timestamps: true }
);

const KPI = mongoose.model("KPI", KPISchema);
export default KPI;

/*mongoose - grabbing the data from the database - ODM - object document mapping 
- Same thing as ORM(object relational mapping )for NoSQL,
 mongoose helps to setup model - makes it just easier to grab information from db */

