import React from 'react'
import {createSlice,configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';
import loginReducer from './Login';


const store = configureStore({
    reducer : {
       login:loginReducer,
       auth:authReducer,
    }
});

export default store;