import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("2601f2910f2c52ce064675f53e7d5cbab")

ReactDOM.render(<App />, document.getElementById('root'));


