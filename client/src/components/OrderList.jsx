import React from 'react';
import OrderListEntity from './OrderListEntity.jsx';
import style from '../style/style.css.jsx';

function sanitizeOrderItems(props) {
    if (props.order_items.slice(2,props.order_items.length-2).split('').length === 0) {
        return [];
    } else {
        return props.order_items.slice(2,props.order_items.length-2).split(',');
    }
} 

function sanitizeMenu(str) {
    let result = {};
    const menu = str.slice(2,str.length-2).split(',');
    // console.log(menu);
    while (menu.length > 0) {
        var value = {};
        // get the key
        const key = menu.splice(0,1);
        // get the name
        value['name'] = '' + menu.splice(0,1);
        // get the price
        value['price'] = '' + menu.splice(0,1);
        // get the content
        let content = menu.splice(0,1) + ',';
        while( menu.length > 0 && !Number.isInteger(parseInt(menu[0])) ) {
            content += menu.splice(0,1) + ',';
        }
        value['content'] = content.slice(0,content.length-1);
        // add menu item to the result
        result[key] = value;
    }
    return result;
}

const OrderList = (props) => {
    const items = sanitizeOrderItems(props);
    const menu = sanitizeMenu(props.menu);
  return (
  <div className="order-list" style={style.orderList}>
    {
        items.length === 0 ?
        ''
        :
        items.map( item => (
        <OrderListEntity key={item} item={menu[item]} value={item}/>
        ))}
  </div>
  );
};

export default OrderList;