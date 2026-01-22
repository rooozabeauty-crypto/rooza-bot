const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Rooza Bot is running");
});

app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);

  res.status(200).json({
    success: true,
    message: "Webhook received successfully",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
