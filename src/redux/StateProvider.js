import React, { createContext, useReducer, useContext, useState, useEffect} from 'react'
import cartListReducer, {initialState as clState} from './reducers/cartListReducer';




export const StateContext = createContext();

export function useStateValue (){
    return useContext(StateContext)
}


// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

export const StateProvider = ({ children }) => {

  // const useCallReducer = (initstate, reducer) => {
  //   // console.log(initstate, reducer); 
  //   const [state, dispatch] = useReducer(reducer, initstate)
  //   console.log([state, dispatch])
  //   return [state, dispatch]
  // };
  // const value = { useCallReducer }
  
  const [cartListState, cartListDispatch] = useReducer(cartListReducer, clState);

  return (
      <StateContext.Provider value={
        {
          cartListState, cartListDispatch
        }
      }>
        {children}
      </StateContext.Provider>
  )
  };


