import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from './../../app/client';
import { GET_ALL_CURRENCIES } from './../../queries/queries';

export const getAllCurrencies = createAsyncThunk('currencies/getAllCurrrencies', async (_, thunkAPI) => {
    const response = await client.query({ query: GET_ALL_CURRENCIES })
    thunkAPI.dispatch(setCurrency(response.data.currencies[0]))
    return response.data.currencies
})

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
        currencies: [],
        currentCurrency: null,
    },
    reducers: {
        setCurrency: (state, action) => {
            state.currentCurrency = action.payload
        },
    },
   extraReducers: builder => {
        builder.addCase(getAllCurrencies.fulfilled, (state, action) => {
            state.currencies = action.payload
        })
    }
})

export const { setCurrency } = currenciesSlice.actions

export default currenciesSlice.reducer