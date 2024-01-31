
import { createStoreHook } from "react-redux";
import { createStore } from "redux";

const reducerfn = (state = { counter: 0 }, action) => {
    //Synchronize function
    //we should not mutate the original state
    switch (action) {
        case action.type === "INC":
            return { counter: state.counter + 1 }
        case action.type === "DEC":
            return { counter: state.counter - 1 }
    }
    if (action.type === "INC") {
        return { counter: state.counter + 1 }
    }
    else if (action.type === "DEC") {
        return { counter: state.counter - 1 }
    }
    else if (action.type === "ADDBY") {
        return { counter: state.counter + Number(action.payload) }
    }
    return state;
}
const store = createStore(reducerfn);

export default store;