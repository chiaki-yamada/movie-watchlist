import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer';


// Initial state
const initialState = {
  watchlist: [],
  watched: [],
};

// Create context
export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  //actions
  


  return (
    <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched }}>
      {props.children}
    </GlobalContext.Provider>
  )
};