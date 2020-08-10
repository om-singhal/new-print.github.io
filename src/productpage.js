import React from 'react';
import './App.css';
import data from './data';


function  productpage (props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);
    return( <div> 
      <h1> {product.name} </h1>  
    </div>
    )}
export default  productpage;
