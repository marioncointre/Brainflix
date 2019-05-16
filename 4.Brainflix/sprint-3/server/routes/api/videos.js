const express = require("express");
const videosRouter = express.Router();
const videosController = require("../controllers/videosController");
videosRouter.get("/", (req, res) => {
  res.json(
    videosController.getVideos(
      req.query.username,
      req.query.done ? JSON.parse(req.query.done) : null
    )
  );
});

module.exports = videosRouter;
