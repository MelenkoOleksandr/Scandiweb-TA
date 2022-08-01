import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from './../../app/client';
import { GET_ALL_CURRENCIES } from './../../queries/queries';

const getAllCurrencies = createAsyncThunk('', async (_, thunkAPI) => {
    const response = await client.query({query: GET_ALL_CURRENCIES})
    return response.data.currencies
})

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
        currencies: null,
    },
   extraReducers: builder => {
       builder.addCase(getAllCurrencies.fulfilled, (state, action) => {
            state.currencies = action.payload
       })
   }
})

export  { getAllCurrencies }

export default currenciesSlice.reducer