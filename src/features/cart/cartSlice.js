import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        restoreCart: (state) => {
            const savedCart = JSON.parse(localStorage.getItem('cart'))
            if (savedCart) state.cart = savedCart
        },
        addProduct: (state, action) => {
            console.log("Added");
            state.cart.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})

export const { restoreCart, addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer