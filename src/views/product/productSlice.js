import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = process.env.REACT_APP_API
const jwt = process.env.REACT_APP_JWT

const productSlice = createSlice({
    name: 'product',
    initialState: { status: '', products: [] },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchGetListProduct.fulfilled, (state, action) => {
            [state.status, state.products] = action.payload
        })
            .addCase(fetchDeleteProduct.fulfilled, (state, action) => {
                const id = action.payload
                if (id)
                {
                    state.products.products = state.products.products.filter(item => item.id != id)
                    state.status = 200
                }else
                    state.status = 403
            })
    }
})

export default productSlice





export const fetchGetListProduct = createAsyncThunk('products/list', async () => {

    const res = await fetch(`${api}/home/0`)
    const data = await res.json()

    return [res.status, data]
})

export const fetchDeleteProduct = createAsyncThunk('products/delete', async (id) => {

    const res = await fetch(`${api}/product/delete/${id}`, {
        method: 'DELETE',
        headers: {
            // Authorization: `Bearer ${jwt}`,
        }
    })
    if (res.status==200)
        return id
    

    return false
})





