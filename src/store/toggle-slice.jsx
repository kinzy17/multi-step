

import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        currentToggle: false,
        previousToggle: false,
        stateChange : false,

        serviceToggle: false,
        storageToggle: false,
        profileToggle: false
    },
    reducers: {
        setToggle(state, action){
            state.currentToggle = action.payload
        },
        handleStateChange(state, action){
            state.stateChange = action.payload
        },
        balanceState(state, action){
            state.previousToggle = action.payload
        },
        handleServiceChange(state, action){
            state.serviceToggle = action.payload
        },
        handleStorageChange(state, action){
            state.storageToggle = action.payload
        },
        handleProfileChange(state, action){
            state.profileToggle = action.payload
        },


    }

})

export const toggleAction = toggleSlice.actions;

export default toggleSlice;