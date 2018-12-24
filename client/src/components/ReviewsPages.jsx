import React from 'react';

const ReviewsPages = (props) => {
    let pages = [];
    for (var i = 1; i <= props.reviews_number; i+=10) {
        pages.push(<a key={i}>{i}</a>);
    }
    
  return (
  <div className="reviews-list-footer">
    <a href key="-1">Prev</a>
    {pages}
    <a href key="-2">Next</a>
  </div>
  );
};

export default ReviewsPages;