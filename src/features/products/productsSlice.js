import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from './../../app/client';
import { GET_ALL_PRODUCTS_IN_CATEGORY } from './../../queries/queries';

const getAllProductsInCategory = createAsyncThunk('products/getAllProductsInCategory', async (category, thunkAPI) => {
    const response = await client.query({ query: GET_ALL_PRODUCTS_IN_CATEGORY, variables: category })
    console.log(response);
    return response.data.category.products
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: null,
    },
    extraReducers: builder => {
        builder.addCase(getAllProductsInCategory.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export { getAllProductsInCategory }

export default productsSlice.reducer