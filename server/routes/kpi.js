import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
    //grabbing the data from db and sending them to FE
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;