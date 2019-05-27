import {createStore} from 'redux'

const initialState = {
    currentValue: 0,
    previousValues: [],
    futureValues: []
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UNDO = 'UNDO';

function reducer(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {previousValues: [state.currentValue, ...state.previousValues ], currentValue: state.currentValue + action.payload};
        case DECREMENT:
            return Object.assign({}, state, {previousValues: [state.currentValue, ...state.previousValues ], currentValue: state.currentValue - action.payload})
        case UNDO:
            return {...state, currentValue: state.previousValues[0],
                 futureValues: [state.currentValue, ...state.futureValues],
                 previousValues: state.previousValues.slice(1)
            }
        default:
          return state;
    }
}

export default createStore(reducer);