
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { user: {}},
    reducers: {
       setUserDetails(state, action){
           state.user = action.payload
            
       }

    }
})


export const userAction = userSlice.actions;

export default userSlice;