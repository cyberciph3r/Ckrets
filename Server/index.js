import express from "express";
const app = express();
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose.connect(import.meta.VITE_MONGODB_CONNECTION_URL);

const secretSchema = new mongoose.Schema({
  secretBody: String,
  secretTag: String,
});

const Secret = mongoose.model("Secret", secretSchema);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.post("/", (req, res) => {
  const secret = new Secret({
    secretBody: req.body.secret,
    secretTag: req.body.tag,
  });
  secret.save();
  res.redirect("https://ckrets.netlify.app/main");
});

app.get("/find", async (req, res) => {
  var results = await Secret.find();
  res.send(results);
});

app.listen(2002);
