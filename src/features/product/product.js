import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from './../../app/client';
import { GET_PRODUCT_BY_Id } from './../../queries/queries';

const getProduct = createAsyncThunk('product/getProduct', async (productId, thunkAPI) => {
    const response = await client.query({ query: GET_PRODUCT_BY_Id, variables: { id: productId } })
    return response.data.product; 
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: null,
        isLoading: false
    },
    extraReducers: builder => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload
                state.isLoading = false
            })

    }
})

export { getProduct }

export default productSlice.reducer