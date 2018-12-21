import React from 'react';
import $ from 'jquery';

class Review extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("we got the rest_id",this.props.restaurant_id);
  }

  render() {
    return (
      <div className="review-main">
       <h2>Hello World!</h2>
      </div>
    );
  }
}

export default Review;