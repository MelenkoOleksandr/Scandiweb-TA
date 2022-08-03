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
        },
        decreaseProductAmount: (state, action) => {
            console.log(state.cart[action.payload].amount);
            if (state.cart[action.payload].amount === 1) {
                state.cart.splice(action.payload, 1)
            } else {
                state.cart[action.payload].amount = state.cart[action.payload].amount - 1
            }
        }
    }
})

export const { restoreCart, addProduct, increaseProductAmount, decreaseProductAmount } = cartSlice.actions

export default cartSlice.reducer