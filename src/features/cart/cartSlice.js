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
            state.cart.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        increaseProductAmount: (state, action) => {
            state.cart[action.payload].amount = state.cart[action.payload].amount + 1
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        decreaseProductAmount: (state, action) => {
            if (state.cart[action.payload].amount === 1) {
                state.cart.splice(action.payload, 1)
            } else {
                state.cart[action.payload].amount = state.cart[action.payload].amount - 1
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        checkout: (state) => {
            state.cart = []
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})

export const { restoreCart, addProduct, increaseProductAmount, decreaseProductAmount, checkout } = cartSlice.actions

export default cartSlice.reducer