
app.post("*", (req, res) => {
  console.log("Webhook PATH:", req.path);
  console.log("Webhook BODY:", req.body);

  res.status(200).json({
    success: true,
    message: "Webhook received",
  });
});
