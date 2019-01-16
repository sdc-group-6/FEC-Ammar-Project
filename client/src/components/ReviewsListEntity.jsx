import React from 'react';
import OrderList from './OrderList.jsx';
import Stars from './Stars.jsx';
import Cup from '../style/Cup.svg';
import BlueStar from '../style/BlueStar.svg';
import style from '../style/style.css.jsx';

const ReviewsListEntity = (props) => {
  const menu = [
    {name: 'bread', price: 4.5, content:'Just bread'},
    {name: 'california roll', price: 12, content:'Masago, crabmeat, cucumber and avocado'},
    {name: 'B.L.T. Sandwich', price: 9.75, content:'Bacon, lettuce and tomatoes'},
    {name: 'Veggie Burger', price: 8, content:'Served on a toasted bun with coleslaw and pickles'},
    {name: 'Baby Back Ribs', price: 15, content:'Full rack of ribs'},
    {name: 'Clam Chowder', price: 6.75, content:'Straight from New England'}
  ];

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
        {
          props.num_of_reviews[props.review.user_name] > 4 ? 
          <span>
            <span><Cup style={style.icon}/></span>
            <span>Top reviewer</span>
          </span> : 
          <span>
            <span><BlueStar style={style.icon}/></span>
            <span>{props.num_of_reviews[props.review.user_name]}</span>
            <span>{props.num_of_reviews[props.review.user_name] < 2 ? ' review' : ' reviews'}</span>
          </span>
        }
        </div>
      </div>
    </div>
    <Stars reviews_number={1} rate={props.review.rating}/>
    <div>{props.review.content}</div>
    <OrderList user_name={props.review.user_name} order_items={props.review.order_items} menu={menu}/>
  </div>
  );
};

export default ReviewsListEntity;