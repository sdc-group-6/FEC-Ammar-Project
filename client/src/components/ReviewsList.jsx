import React from 'react';
import ReviewsListEntity from './ReviewsListEntity.jsx';
import ReviewsPages from './ReviewsPages.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ordered_reviews: this.props.reviews,
        rendering_order: 'Most recent',
        page_num: 1
    }

    this.changeReviewsOrder = this.changeReviewsOrder.bind(this);
    this.changeReviewsPage = this.changeReviewsPage.bind(this);
  }

  componentDidMount() {
      let ordered_reviews = this.props.reviews.sort( (a,b) => {
          return new Date(b.update_date) - new Date(a.update_date);
        });
        
        this.setState({
            ordered_reviews: ordered_reviews,
            rendering_order: 'Most recent',
            page_num: 1
        });

  }


  changeReviewsOrder(event) {
      // sort reviews according to selected order
      let order = event.target.value;
      let ordered_reviews = [];

      if (order === 'Most recent') {
        ordered_reviews = this.props.reviews.sort( (a,b) => {
            return new Date(b.update_date) - new Date(a.update_date);
        });

      } else if (order === 'Highest rated') {
        ordered_reviews = this.props.reviews.sort( (a,b) => {
            return b.rating - a.rating;
        });

      }

      this.setState({
          ordered_reviews: ordered_reviews,
          rendering_order: order,
          page_num: 1
      });
  }

  changeReviewsPage(event) {
      let page_num = event.target.value;
      // if page number is less than 1 keep it 1
      // if page number is more than (reviews_number / 10) keep it on that number

      this.setState({
        ordered_reviews: this.state.ordered_reviews,
        rendering_order: this.state.order,
        page_num: page_num
    });

  }

  render() {
    return (
      <div className="review-list">
        <div className="reviews-list-header">
            <span>Sort by: </span>
            <select className="reviews-list-sorting" onChange={this.changeReviewsOrder}>
                <option value='Most recent'>Most recent</option>
                <option value='Highest rated'>Highest rated</option>
            </select>
        </div>
        <br></br>
        <br></br>
        <div className="reviews-list-body">
            {
                /* display 10 reviews using the page_num attribute in the state as a referance */
                this.props.reviews.slice(this.state.page_num * 10 - 10, this.state.page_num * 10).map(review => (
                     <ReviewsListEntity review={review} key={review.id}/>
                     ))
            }
        </div>
        <br></br>
        <ReviewsPages reviews_number={this.props.reviews_number} changeReviewsPage={this.changeReviewsPage}/>
      </div>
    );
  }
}

export default ReviewsList;