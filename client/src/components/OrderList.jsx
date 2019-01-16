import React from 'react';
import OrderListEntity from './OrderListEntity.jsx';
import style from '../style/style.css.jsx';

function parseOrderItems(props) {
    if (props.order_items === "") {
        return [];
    } else {
        return props.order_items.split(',');
    }
} 

function parseMenu(str) {
    let result = {};
    const menu = str;
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
        // while( menu.length > 0 && !Number.isInteger(parseInt(menu[0])) ) {
        //     content += menu.splice(0,1) + ',';
        // }
        value['content'] = menu.splice(0,1);
        // add menu item to the result
        result[key] = value;
    }
    return result;
}

const OrderList = (props) => {
    const items = parseOrderItems(props);
    const menu = (props.menu);
  return (
  <div>
    {
        items.length === 0
        ? ''
        :  <div>
            <div className="user-ordered" style={style.userOrdered}>
                {props.user_name + ' ordered:'}
            </div>
            <div className="order-list" style={style.orderList}>
                {items.map(item => (
                    <OrderListEntity key={item} item={menu[item]} value={item}/>
                ))}
            </div>
          </div>
    }
  </div>
  );
};

export default OrderList;