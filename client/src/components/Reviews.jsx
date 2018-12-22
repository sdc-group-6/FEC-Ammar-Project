import React from 'react';
import $ from 'jquery';
import Summary from './Summary.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      restaurant_name: '',
      reviews_number: 0,
      rating: 0,
      delivery_rating: 0,
      order_rating: 0
    }

  }

  componentDidMount() {

    fetch(`reviews/${this.props.restaurant_id}`)
    .then(response => response.json())
    .then(data => {

      let restaurant_name = data[0]['restaurant_name'] || '';
      let reviews_number = data.length || 0;
      let rating = 0;
      let delivery_rating = 0;
      let order_rating = 0;

      // calculate the summation of rating, delivery_rating and order_rating
      data.forEach(review => {
        rating += review['rating'] || 0;
        delivery_rating += review['delivery_rating'] || 0;
        order_rating += review['order_rating'] || 0;
      });

      this.setState({
        reviews: data,
        restaurant_name: restaurant_name,
        reviews_number: reviews_number,
        rating: rating,
        delivery_rating: delivery_rating,
        order_rating: order_rating
      });

    })
    .catch(function(error) {
      console.log('Cant get the reviews from the server', error);
    });

  }

  render() {
    return (
      <div className="review-main">
       <Summary restaurant_name={this.state.restaurant_name} reviews_number={this.state.reviews_number} rating={this.state.rating} delivery_rating={this.state.delivery_rating} order_rating={this.state.order_rating}/>
       <hr></hr>
      </div>
    );
  }
}

export default Review;