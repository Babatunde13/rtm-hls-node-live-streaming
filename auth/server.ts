import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const STREAM_KEY = process.env.STREAM_KEY || "supersecret";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.post("/auth", (req, res) => {
    const streamKey = req.body.key;

    if (streamKey === STREAM_KEY) {
        res.send("OK");
    } else {
        res.status(401).send("Unauthorized");
    }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
