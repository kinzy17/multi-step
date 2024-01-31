
import { createSlice } from "@reduxjs/toolkit";

const stageSlice = createSlice({
    name: 'stage',
    initialState: { stage: 1 },
    reducers: {
        nextStage(state, action) {
            state.stage++;
        },
        goBack(state, action) {
            state.stage--;
        },
        setStage(state, action) {
            state.stage = action.payload
        }

    }
})


export const stageAction = stageSlice.actions;

export default stageSlice;