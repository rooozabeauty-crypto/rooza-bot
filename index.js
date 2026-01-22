const express = require("express");
const app = express();

app.use(express.json()); // مهم جدًا

app.post("/webhook", (req, res) => {
  console.log("📩 Webhook وصل من سلة");
  console.log(req.body);
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("App is running ✅");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
