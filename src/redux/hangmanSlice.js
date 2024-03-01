import { createSlice } from "@reduxjs/toolkit";



const hangmanSlice=createSlice({
    name: "hangman",
    initialState: {
        selectedCategory: "",
        hiddenWord: "",
        health: 10,
    },
    reducers: {
        changeCategory: (state, action)=>{
            state.selectedCategory=action.payload.value
        }
    }
})