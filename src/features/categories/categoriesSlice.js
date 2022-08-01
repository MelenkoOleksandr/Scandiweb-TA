import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from './../../app/client';
import { GET_ALL_CATEGORIES } from './../../queries/queries';

const getAllCategories = createAsyncThunk('categories/getAllCategories', async (_, thunkAPI) => {
    const response = await client.query({ query: GET_ALL_CATEGORIES })
    console.log(response);
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