const path = require('path');

const reviewMain = {
  padding: '30px',
  font: '16px Arial',
};

const percentageList = {
  display: 'inline-flex',
};

const percentage = {
  padding: '2px 10px 2px 10px',
  maxWidth: '65px',
};

const rating = {
  marginTop: '1px',
  fontSize: '13px',
  color: 'gray',
};

const percentageText = {
  fontSize: '13px',
  color: 'gray',
};

const reviewsListSorting = {
  padding: '6px 32px 6px 12px',
  fontSize: '16px',
  backgroundColor: '#fff',
  color: 'rgba(0,0,0,.87)',
  border: '2px solid rgba(0,0,0,.2)',
  WebkitAppearance: 'none', /* Removes default chrome and safari style */
  MozAppearance: 'none', /* Removes default style Firefox */
  background: `url(${path.join(__dirname, './downArrow.png')}) `,
  backgroundPosition: '100% 50%',
  backgroundRepeat: 'no-repeat',
};

const reviewsListHeader = {
  float: 'right',
  color: 'gray',
};

const reviewsListFooter = {
  textAlign: 'center',
};

const link = {
  color: 'blue',
  textDecoration: 'underline',
  padding: '5px',
  cursor: 'pointer',
};

const reviewsListEntity = {
  padding: '15px',
};

const reviewDate = {
  color: 'gray',
  float: 'right',
  fontSize: '13px',
};

const reviewUser = {
  display: 'table',
  alignItems: 'center',
  padding: '10px',
};

const circle = {
  color: 'white',
  backgroundColor: '#40c2de',
  width: '40px',
  height: '40px',
  borderRadius: '40px',
  textAlign: 'center',
  fontSize: '20px',
  verticalAlign: 'middle',
  display: 'table-cell',
  padding: '5px',
};

const userName = {
  fontWeight: 'bold',
  paddingLeft: '5px',
};

const reviewsNum = {
  paddingLeft: '5px',
  fontSize: '14px',
  fontWeight: 'light',
};

const stars = {
  padding: '0px',
  display: 'inline-flex',
};

const star = {
  backgroundSize: '22px 22px',
  height: '22px',
  width: '22px',
};

const icon = {
  height: '21px',
  width: '21px',
  paddingRight: '5px',
};

export default {
  reviewMain,
  percentageList,
  percentage,
  rating,
  percentageText,
  stars,
  star,
  reviewsListSorting,
  reviewsListHeader,
  reviewsListFooter,
  link,
  reviewsListEntity,
  reviewDate,
  reviewUser,
  circle,
  userName,
  reviewsNum,
  icon,
};
