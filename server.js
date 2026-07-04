import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const topic = req.body.topic;

  const result = `${topic} is an important topic. It helps in real-world understanding and improves knowledge in many fields.`;

  res.json({ paragraph: result });
});

app.listen(5000, () => console.log("Server running on port 5000"));