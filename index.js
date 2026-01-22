
const express = require("express");
const app = express();

app.use(express.json());

// اختبار السيرفر
app.get("/", (req, res) => {
  res.status(200).send("🚀 Roza Bot is running");
});

// استقبال أي webhook
app.post("*", (req, res) => {
  console.log("Webhook PATH:", req.path);
  console.log("Webhook BODY:", req.body);

  res.status(200).json({
    success: true,
    message: "Webhook received"
  });
});

// تشغيل السيرفر (هذا أهم سطرين!)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
