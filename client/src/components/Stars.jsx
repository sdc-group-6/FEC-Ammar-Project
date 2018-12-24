import React from 'react';

const Stars = (props) => {
    let starts_filling_percentage = Math.round((props.rate/props.reviews_number)*20);
  return (
  <div className="stars">
  { starts_filling_percentage >= 10? <span className="fa fa-star checked"></span> : <span className="fa fa-star not-checked"></span>}
  { starts_filling_percentage >= 30? <span className="fa fa-star checked"></span> : <span className="fa fa-star not-checked"></span>}
  { starts_filling_percentage >= 50? <span className="fa fa-star checked"></span> : <span className="fa fa-star not-checked"></span>}
  { starts_filling_percentage >= 70? <span className="fa fa-star checked"></span> : <span className="fa fa-star not-checked"></span>}
  { starts_filling_percentage >= 90? <span className="fa fa-star checked"></span> : <span className="fa fa-star not-checked"></span>}
   </div>
  );
};

export default Stars;