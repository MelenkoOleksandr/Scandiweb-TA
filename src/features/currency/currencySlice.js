import { createSlice } from '@reduxjs/toolkit'

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currency: null,
    },
    reducers: {
        setCurrency: (state, action) => {
            state.currency = action.payload
        },
    }
})

export const { setCurrency } = currencySlice.actions

export default currencySlice.reducer