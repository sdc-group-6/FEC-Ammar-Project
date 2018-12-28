const path = require('path');

const reviewMain = {
  padding: '30px',
  font: '15px sans-serif',
  fontWeight: 400,
  lineHeight: 1.45,
};

const percentageList = {
  paddingTop: '1px',
  marginTop: '1px',
  display: 'inline-flex',
};

const percentage = {
  padding: '10px',
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

const fa = {
  fontSize: '15px',
};

const checked = {
  color: 'gold',
};

const notChecked = {
  color: 'lightgray',
};

const reviewsListSorting = {
  padding: '4px 32px 4px 12px',
  fontSize: '14px',
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
  fontSize: '12px',
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
};

const userName = {
  fontWeight: 'bold',
  paddingLeft: '5px',
};

const reviewsNum = {
  paddingLeft: '5px',
  fontSize: '14px',
};

const blueStar = {
  color: '#40c2de',
  paddingRight: '5px',
};

export default {
  reviewMain,
  percentageList,
  percentage,
  rating,
  percentageText,
  fa,
  checked,
  notChecked,
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
  blueStar,
};
