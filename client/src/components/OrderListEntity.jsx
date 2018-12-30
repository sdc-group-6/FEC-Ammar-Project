import React from 'react';
import style from '../style/style.css.jsx';

const OrderListEntity = (props) => {
  return (
  <div className="order-list-entity" style={style.orderListEntity}>
    {props.item['name'] + ' + '}
  </div>
  );
};

export default OrderListEntity;