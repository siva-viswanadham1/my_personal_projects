import { createSlice } from "@reduxjs/toolkit";

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
    reducers:{
        setProduct(state,action){
            state.data=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
})
export const {setProduct,setStatus}=productSlice.actions

export default productSlice.reducer

export const fectchProduct=()=>{
    return async function fectchProductThunk(dispacher){
        dispacher(setStatus(STATUS.LOADING))
        try {
            const response=await axios.get('https://fakestoreapi.com/products')
            dispacher(setProduct(response.data))
            dispacher(setStatus(STATUS.SUCESS))
        } catch (error) {
            console.log(error)
            dispacher(setStatus(STATUS.ERROR))
        }
    }
}
