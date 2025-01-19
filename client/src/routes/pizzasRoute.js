const express = require("express");
const router = express.Router();
const Pizza  = require("/mern pizza/client/models/pizzaModel");

router.get("/getallpizzas",async(req,res) => {

try{
const pizzas = await  Pizza.find({})//(require('../models/pizzaModel')).find({})

res.send(pizzas)
} catch(error) {    
    return res.status(500).json({message:error});
    //console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")

}


});
 module.exports =router;




