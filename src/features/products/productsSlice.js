import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from './../../app/client';
import { GET_ALL_PRODUCTS_IN_CATEGORY } from './../../queries/queries';

const getAllProductsInCategory = createAsyncThunk('products/getAllProductsInCategory', async (category, thunkAPI) => {
    const categoryInput = {
        category: {
            title: category
        }
    }
    const response = await client.query({ query: GET_ALL_PRODUCTS_IN_CATEGORY, variables: categoryInput })
    return response.data.category.products
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: null,
        isLoading: false
    },
    extraReducers: builder => {
        builder
        .addCase(getAllProductsInCategory.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllProductsInCategory.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false
        })
        
    }
})

export { getAllProductsInCategory }

export default productsSlice.reducer