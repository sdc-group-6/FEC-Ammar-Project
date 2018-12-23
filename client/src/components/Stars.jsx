import React from 'react';

const Stars = (props) => (
  <div>
      <div className="starts">
      starts filling percentage {Math.round((props.rate/props.reviews_number)*20)}
      </div>
  </div>
);

export default Stars;