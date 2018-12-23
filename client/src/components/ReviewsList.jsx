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
        <div className="reviews-list-header">
            <span>Sort by: </span>
            <select className="reviews-list-sorting">
                <option value="0">Most recent</option>
                <option value="1">Highest rated</option>
            </select>
        </div>
      </div>
    );
  }
}

export default ReviewsList;