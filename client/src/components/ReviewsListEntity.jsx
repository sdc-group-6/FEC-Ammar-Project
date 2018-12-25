import React from 'react';
import Stars from './Stars.jsx';
import style from '../style/style.css.jsx';

const ReviewsListEntity = (props) => {
  return (
  <div className="reviews-list-entity" style={style.reviewsListEntity}>
    <div className="review-date" style={style.reviewDate}>
      {new Date(props.review.update_date).toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric' })}
    </div>
    <div className="review-user" style={style.reviewUser}>
      <div className="circle" style={style.circle}>
        {props.review.user_name.substring(0,1)}
      </div>
      <div>
        <div className="user-name" style={style.userName}>
          {props.review.user_name}
        </div >
        <div className="reviews-num" style={style.reviewsNum}>
          <span className="fa fa-star checked" style={style.blueStar}></span>
           {props.num_of_reviews[props.review.user_name]} 
           {props.num_of_reviews[props.review.user_name] < 2 ? ' review' : ' reviews'}
        </div>
      </div>
    </div>
    <Stars reviews_number={1} rate={props.review.rating}/>
    {props.review.content}
  </div>
  );
};

export default ReviewsListEntity;