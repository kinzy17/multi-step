
// STORE - GLOBALISED STATE

//ACTION E.G INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// //REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }
// let store = createStore(counter);

//DISPLAY TO CONSOLE
// store.subscribe(() => console.log(store.getState()));

//DISPATCH
// store.dispatch(increment);

// const add = (a) => {
//   return function (b) {
//     return a + b;
//   }
// }
// console.log(add(5)(5));



import { createStore } from 'redux';

// STORE - GLOBALISED STATE

//ACTION E.G INCREMENT
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

//REDUCER
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
}
let store = createStore(counter);

//DISPLAY TO CONSOLE
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment);

// import { createStore } from 'redux';