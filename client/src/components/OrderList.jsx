import React from 'react';
import style from '../style/style.css.jsx';

const OrderList = (props) => {
  return (
  <div className="order-list">
    <div>{JSON.parse(props.order_items)}</div>
    <div>{JSON.parse(props.menu)}</div>
  </div>
  );
};

export default OrderList;