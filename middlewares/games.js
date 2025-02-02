const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  console.log("GET /games");
  req.gamesArray = await games.find({}).populate("categories").populate("users");
  next();
};

module.exports = findAllGames;
