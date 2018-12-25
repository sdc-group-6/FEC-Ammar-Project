import React from 'react';
import Stars from './Stars.jsx';
import style from '../style/style.css.jsx';

const ReviewsListEntity = (props) => {
  return (
  <div className="reviews-list-entity" style={style.reviewsListEntity}>
    <div className="review-date" style={style.reviewDate}>
      {new Date(props.review.update_date).toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric' })}
    </div>
    <div className="review-user">
      {props.review.user_name}
    </div>
    <Stars reviews_number={1} rate={props.review.rating}/>
    {props.review.content}
  </div>
  );
};

export default ReviewsListEntity;