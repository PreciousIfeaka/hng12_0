import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = process.env.PORT;

app.options("*", cors());
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
    ],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_request, response) => {
  response.status(200).json({
    "email": process.env.EMAIL,
    "current_datetime": new Date().toISOString(),
    "github_url": process.env.GH_URL
  });
});


app.listen(port, () => {
  console.log(`Server started and listening on port ${port} 🚀`);
});