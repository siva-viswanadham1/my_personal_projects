import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios' 

export const STATUS={
    SUCESS:"sucess",
    LOADING:'Loading',
    ERROR:'Error'
}
const productSlice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.SUCESS
    },
    // reducers:{
    //     setProduct(state,action){
    //         state.data=action.payload
    //     },
    //     setStatus(state,action){
    //         state.status=action.payload
    //     }
    // },
    extraReducers:builder=>{
        builder.addCase(fectchProduct.pending,state=>{
            state.status=STATUS.LOADING
        }).addCase(fectchProduct.fulfilled,(state,action)=>{
            state.status=STATUS.SUCESS
            state.data=action.payload
        }).addCase(fectchProduct.rejected,state=>{
            state.status=STATUS.ERROR
        })
    }
   
})
export const fectchProduct=createAsyncThunk('product',async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    return response.data
})

export const {setProduct,setStatus}=productSlice.actions

export default productSlice.reducer

//export const fectchProduct=()=>{
// return async function fectchProductThunk(dispacher){
//     dispacher(setStatus(STATUS.LOADING))
//     try {
//         const response=await axios.get('https://fakestoreapi.com/products')
//         dispacher(setProduct(response.data))
//         dispacher(setStatus(STATUS.SUCESS))
//     } catch (error) {
//         console.log(error)
//         dispacher(setStatus(STATUS.ERROR))
//     }
// }
// }
