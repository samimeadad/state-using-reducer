import React, { useReducer } from 'react';

const counterInitialState = {
    counter: 0,
    clicks: 0,
    active: true
}

const counterReducer = ( state, action ) => {
    switch ( action.type ) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
            break;

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
            break;

        default:
            return state;
            break;
    }
}

const Counter = () => {
    const [ state, dispatch ] = useReducer( counterReducer, counterInitialState );
    return (
        <div>
            <h1>{ state.counter }</h1>
            <button onClick={ () => dispatch( { type: 'DECREMENT' } ) }>Decrease</button>
            <button onClick={ () => dispatch( { type: 'INCREMENT' } ) }>Increase</button>
        </div >
    );
};

export default Counter;