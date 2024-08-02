import React from 'react';
import {createSlice} from '@reduxjs/toolkit';


const initialLoginState = {
    email:'',
    password:'',
    nickname:'',
};
const loginSlice = createSlice({
    name:'Login',
    initialState:initialLoginState,
    reducers:{
        login(state,action){  
            const {email, password, nickname} = action.payload 
            state.email=email,
            state.password=password,
            state.nickname=nickname

        },
        getnickName(state,action){
            state.nickname=action.payload
        },
        logout(state){
            state.loginId='',
            state.password='',
            state.nickname=''
        }
    }
})

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;