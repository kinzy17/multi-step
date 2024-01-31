
import { createSlice } from "@reduxjs/toolkit";

const checkedSlice = createSlice({
    name: 'checkedItems',
    initialState: {
        checkedItems: {},
        totalQuantity: 0,
        showCheckedItems: false
    },
    reducers: {
        addToCheckedItems(state, action) {
            const newItem = action.payload;
            const existingItem = state.checkedItems.hasOwnProperty(newItem.id)
           
            // if (!existingItem) {
                state.checkedItems[newItem.id] = {
                    id: newItem.id,
                    name: newItem.name,
                    description: newItem.description,
                    price: newItem.price

                // }
            }
        },
        removeFromCheckedItems(state, action) {
            const itemId = action.payload;
           delete state.checkedItems[itemId]
         },
        showCheckedItems(state) { },
        setSelectedItem(state, action) {
            // this.setSelectedItem.add
        },

    }
})


export const checkedAction = checkedSlice.actions;

export default checkedSlice;