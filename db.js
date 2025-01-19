const mongoose = require("mongoose");

var mongoURL =  "mongodb+srv://Karthiga:kavin@cluster0.xucd93b.mongodb.net/chandru-pizza"


mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
  console.log(`mongodb connection sucessfully `);
})

db.on('error', () => {
  console.log(`mongodb connection failed`);
})

module.exports = mongoose
