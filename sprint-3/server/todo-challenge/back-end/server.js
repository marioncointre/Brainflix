const express = require("express");
const app = express();
const cors = require("cors");
const videosRouter = require("./routes/videos");
// const userRouter = require("./routes/videos/:video");

app.use(cors());
app.use(express.json());
app.use("/videos", videosRouter);
// app.use("/:video", singleRouter);

app.listen(8080, () => {
  console.log("Listening...");
});

