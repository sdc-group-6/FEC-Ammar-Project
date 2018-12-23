import React from 'react';

const Percentage = (props) => (
  <div className="percentage">
    <h3>{Math.round((props.rate/props.reviews_number)*20)}%</h3>
    <p className="percentage-text">{props.text}</p>
  </div>
);

export default Percentage;