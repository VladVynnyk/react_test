import React from 'react';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

let initialState = {}
const reducer = (combineReducers({}))

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;