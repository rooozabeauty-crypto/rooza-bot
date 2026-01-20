const express = require("express");
const app = express();

app.use(express.json());

// endpoint للاختبار
app.get("/", (req, res) => {
  res.send("Rooza Salla Bot is running 🚀");
});

// webhook من سلة
app.post("/webhook", (req, res) => {
  console.log("Webhook received from Salla:");
  console.log(req.body);

  // لازم نرجع 200
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
