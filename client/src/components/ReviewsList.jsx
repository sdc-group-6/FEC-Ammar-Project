import React from 'react';
import Stars from './Stars.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews || [],
      reviews_number: this.props.reviews_number || 0
    }

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="review-list">
      reviews-list
      </div>
    );
  }
}

export default ReviewsList;