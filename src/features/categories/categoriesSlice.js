import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProductsInCategory } from '../products/productsSlice';
import client from './../../app/client';
import { GET_ALL_CATEGORIES } from './../../queries/queries';

const getAllCategories = createAsyncThunk('categories/getAllCategories', async (_, thunkAPI) => {
    const response = await client.query({ query: GET_ALL_CATEGORIES })
    thunkAPI.dispatch(getAllProductsInCategory(response.data.categories[0].name))
    return response.data
})

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: null,
    },
    extraReducers: builder => {
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
    }
})

export { getAllCategories }

export default categoriesSlice.reducer