import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';

ReactDOM.render(
<App />, 
document.getElementById('root'));

//https://b.limminho.com/archives/1384
serviceWorker.unregister();
