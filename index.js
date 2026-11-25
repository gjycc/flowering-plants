import express from "express";
import cors from "cors";

import plantsRouter from "./src/routes/plantsRouter.js";
import authRouter from "./src/routes/authRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/plants", plantsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Flowering Plants API!" });
});
app.use("/api/plants", plantsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server en http://localhost:${PORT}`);
});
