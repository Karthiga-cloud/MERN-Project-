const express = require("express");
const Pizza = require("./client/models/pizzaModel");

const app = express();

const db = require("./db.js");

app.use(express.json());
const pizzasRoute = require("./client/src/routes/pizzasRoute");
app.use("/api/Pizzas/", pizzasRoute);

app.get("/", (req, res) => {
  res.send("server working" + port);
});

//app.get('/getpizzas', async(req, res) => {
//try {
//const docs= await Pizza.find({});
//res.send(docs);
//} catch(err){
//throw(err)
//}

//});

const port = process.env.PORT || 8000;
app.listen(port, () => `server running on port`);
