import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    buyer: String,
    amount: Number,
    productIds: [Schema.Types.ObjectId],
  },
  { timestamps: true },
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
