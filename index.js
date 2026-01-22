const express = require("express");
const app = express();

// مهم جدًا
app.use(express.json());

// صفحة رئيسية
app.get("/", (req, res) => {
  res.status(200).send("🚀 بوت روزا يعمل");
});

// Webhook من سلة
app.post("/webhook", (req, res) => {
  console.log("🔥 Salla Webhook HIT");
  console.log("Headers:", req.headers);
  console.log("Body:", JSON.stringify(req.body, null, 2));

  res.status(200).json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});