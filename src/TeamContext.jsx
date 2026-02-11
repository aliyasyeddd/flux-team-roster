import React, { createContext , useReducer, useContext} from "react";

//1. initial state(the starting point of our state)
const initialState = {
    players: []
};

//2. reducer function
// ( a pure function that takes the current state and an action,
//  and returns a new state based on the action type)
function teamReducer(state, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [...state.players, { id: Date.now(), name:action.payload}]
            };
        case 'REMOVE_PLAYER':
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.payload)
            };
        case 'CLEAR_ROSTER':
            return {
                ...state,
                players: []
            }
        default:
            return state;
    }
}

//3. create context
const TeamContext = createContext();

//4. the provider component
export const TeamProvider =({ children }) => {
    const [state, dispatch] = useReducer(teamReducer, initialState);

    return (
        <TeamContext.Provider value={{ state, dispatch }}>
            {children}
        </TeamContext.Provider>
    )
}

///5.custom hook for easy success
export const useTeam = () => useContext(TeamContext);    

