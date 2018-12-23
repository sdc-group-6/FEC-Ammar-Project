import React from 'react';
import Stars from './Stars.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      reviews_number: 0
    }
  }

  componentDidMount() {
      this.setState({
        reviews: this.props.reviews || [],
        reviews_number: this.props.reviews_number || 0
      });

  }

  render() {
    return (
      <div className="review-list">
      <h2>hello world</h2>
      </div>
    );
  }
}

export default ReviewsList;