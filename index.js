import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import https from "https";

dotenv.config()

function keepAlive(url) {
  https
    .get(url, (res) => {
      console.log(`Status: ${res.statusCode}`);
    })
    .on("error", (error) => {
      console.error(`Error: ${error.message}`);
    });
}


const port = process.env.PORT;

cron.schedule("*/5 * * * *", () => {
  keepAlive(process.env.LIVE_URL || `http://localhost:${port}`);
  console.log("Pinging the server every 5 minutes");
});

const app = express();

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