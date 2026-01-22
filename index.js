const express = require("express");
const app = express();

// مهم جدًا عشان يستقبل JSON من سلة
app.use(express.json());

// للتأكد إن السيرفر شغال
app.get("/", (req, res) => {
  res.send("Server is running OK ✅");
});

// للتأكد إن مسار webhook موجود
app.get("/webhook", (req, res) => {
  res.send("Webhook GET OK ✅");
});

// هذا هو Webhook الحقيقي اللي سلة تستخدمه (POST)
app.post("/webhook", (req, res) => {
  console.log("===== SALLA WEBHOOK RECEIVED =====");
  console.log(JSON.stringify(req.body, null, 2));
  console.log("=================================");

  // لازم ترجع 200
  res.status(200).send("OK");
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
