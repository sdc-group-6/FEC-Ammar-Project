import React from 'react';

const Percentage = (props) => (
  <div className="percentage">
    <h3>{Math.round((props.rate/props.reviews_number)*20)}%</h3>
    <span className="percentage-text">{props.text}</span>
  </div>
);

export default Percentage;