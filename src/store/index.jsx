
import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './toggle-slice'
import stageSlice from './stage-slice';
import checkedSlice from './checked-slice';
import planSlice from './plan-slice';
import userSlice from './user-slice';


const store = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
        stage: stageSlice.reducer,
        checkedItems: checkedSlice.reducer,
        plan : planSlice.reducer,
        user : userSlice.reducer,
    }
})
export default store;