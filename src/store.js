import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import ourstore from './reducers';
import thunk from 'redux-thunk';


export default createStore(ourstore, composeWithDevTools(applyMiddleware(thunk,logger)));
