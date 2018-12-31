import React from 'react';
import style from '../style/style.css.jsx';

class OrderListEntity extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: ''
      };
    }
    
    render() {
        return (
        <div className="order-list-entity" style={style.orderListEntity}>
            {this.props.item['name'] + ' + '}
        </div>
        );
    }
};

export default OrderListEntity;