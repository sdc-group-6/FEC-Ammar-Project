import React from 'react';

const ReviewsListEntity = (props) => {
  return (
  <div className="reviews-list-entity">
  {props.review.id} // {props.review.rating} // {props.review.update_date}
  </div>
  );
};

export default ReviewsListEntity;