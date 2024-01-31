
import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: 'plan',
    initialState: { plan: "" },
    reducers: {
        setPlan(state, action){
            state.plan = action.payload
        }

    }
})


export const planAction = planSlice.actions;

export default planSlice;