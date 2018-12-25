import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Components/Reviews.jsx';

var id = parseInt(prompt());

ReactDOM.render(<Reviews restaurant_id={id}/>, document.getElementById('root'));
