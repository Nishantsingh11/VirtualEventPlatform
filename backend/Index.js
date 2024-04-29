import connecter from "./Connecter/Connecter.js";
import express from "express";
const app = express();
import dotenv from "dotenv";
const PORT = process.env.PORT || 3100;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
