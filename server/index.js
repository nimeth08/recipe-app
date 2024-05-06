const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const routes = require("./Routes/recipeRoutes");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
const PORT = 8080;

const DB = "mongodb+srv://nd24:nimeth@recipe-cluster.zbymlly.mongodb.net/";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected..");
  });

app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
