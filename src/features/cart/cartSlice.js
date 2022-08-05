import { createSlice } from "@reduxjs/toolkit";
import { findSameProductInCartIndex } from "../../helpers/cartHelper";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        restoreCart: (state) => {
            const savedCart = JSON.parse(localStorage.getItem('cart'))
            if (savedCart) state.cart = savedCart
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        addProduct: (state, action) => {
            const sameItemIndex = findSameProductInCartIndex(state.cart, action.payload.id, action.payload.attributes)
            if (sameItemIndex === -1) {
                state.cart.push({ ...action.payload, amount: 1 })
            } else {
                state.cart[sameItemIndex].amount++
            }
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
        }
    }


})

export const { restoreCart, addProduct, increaseProductAmount, decreaseProductAmount, checkout } = cartSlice.actions

export default cartSlice.reducer