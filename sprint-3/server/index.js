const express = require("express");
const app = express();
// const videosRouter = require("./routes/videos");

app.use(express.json());
// app.use("/videos", videosRouter);

app.get("/", (req, res) => {
  res.json("videos");
});

app.listen(5000, (req, res) => {
  console.log("Listening...");
});
