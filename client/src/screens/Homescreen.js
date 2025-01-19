 import React, {  useEffect } from "react";

 import{useDispatch } from "react-redux"


// import ReactDOM from 'react-dom'
// import React, { Component }  from 'react'; 


import pizzas from '../pizzasdata'
import Pizza from "../components/Pizza"
import { getAllPizzas } from "../actions/pizzaActions"
export default function Homescreen() {

const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getAllPizzas())

  },)
 



    return (
      <div>
        <div className="row">
            {pizzas.map(pizza=>{
                return <div className="col-md-4">
              <div>
                 <Pizza pizza={pizza} />
                 </div>
                 </div>


             } )}
        </div>

         </div>
    )}
  