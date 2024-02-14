const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrls.js");
const app = express();

app.use(express.urlencoded({ extended: false }));
mongoose.connect("mongodb://localhost/urlShortener");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl === null) {
    res.sendStatus(404);
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.full);
  }
});
app.listen(process.env.PORT || 5000);
