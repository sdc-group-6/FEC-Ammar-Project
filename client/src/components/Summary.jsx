import React from 'react';
import Stars from './Stars.jsx';
import Percentage from './Percentage.jsx';

const Summary = (props) => (
  <div className="summary">
    <h3>Reviews for {props.restaurant_name}</h3>
    <Stars reviews_number={props.reviews_number} rate={props.rating}/>
    <span>{props.reviews_number} ratings</span>
    <p>Here's what people are saying:</p>
    <div className="percentage-list">
        <Percentage reviews_number={props.reviews_number} rate={props.rating} text="Food was good"/>
        <Percentage reviews_number={props.reviews_number} rate={props.delivery_rating} text="Delivery was on time" />
        <Percentage reviews_number={props.reviews_number} rate={props.order_rating} text="Order was accurate" />
    </div>
  </div>
);

export default Summary;