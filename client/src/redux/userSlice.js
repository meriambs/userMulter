import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const userSlice=createSlice({
    name:"user",
    initialState:[
        {
            id:uuidv4(),
            name:"meriam",
           photo:"",
            email:'bensalah@gmail.com'
        }
        
    ],
    reducers:{
        setContact:(state,action)=>{
   return action.payload
        }
    }
})

export const {setContact} = userSlice.actions
export default userSlice.reducer