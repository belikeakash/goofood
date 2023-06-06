import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from './Reducer'

const Cart = createContext()

export const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, [])

  return (
    <Cart.Provider  value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export const CartState = () => {
    return useContext(Cart)
}