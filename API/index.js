import express from "express";
import cors from "cors";

const app = express();

// Use CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/", async (req, res) => {
  try {
    const { followers, products } = req.body;
    console.log(followers, products);

    const monthly = (followers / 10) * products * 1000;
    const formattedMonthly = monthly.toLocaleString("en-IN");

    const yearly = monthly * 12;
    const formattedYearly = yearly.toLocaleString("en-IN");

    res
      .status(200)
      .json({ monthly: formattedMonthly, yearly: formattedYearly });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
