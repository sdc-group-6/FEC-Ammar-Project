import React from 'react';
import style from '../style/style.css.jsx';

const Stars = (props) => {
    let stars_filling_percentage = Math.round((props.rate/props.reviews_number)*20);
  return (
  <div className="stars" style={style.fa}>
  { stars_filling_percentage >= 10? <span className="fa fa-star checked" style={style.checked}></span> : <span className="fa fa-star notChecked " style={style.notChecked}></span>}
  { stars_filling_percentage >= 30? <span className="fa fa-star checked" style={style.checked}></span> : <span className="fa fa-star notChecked " style={style.notChecked}></span>}
  { stars_filling_percentage >= 50? <span className="fa fa-star checked" style={style.checked}></span> : <span className="fa fa-star notChecked " style={style.notChecked}></span>}
  { stars_filling_percentage >= 70? <span className="fa fa-star checked" style={style.checked}></span> : <span className="fa fa-star notChecked " style={style.notChecked}></span>}
  { stars_filling_percentage >= 90? <span className="fa fa-star checked" style={style.checked}></span> : <span className="fa fa-star notChecked " style={style.notChecked}></span>}
   </div>
  );
};

export default Stars;