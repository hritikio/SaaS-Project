import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Error handler for invalid JSON
app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON" });
  }
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

app.listen(5000, () => console.log("Server: http://localhost:5000"));
