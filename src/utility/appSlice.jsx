import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },

    reducers:{
           ToggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
           },
           isClosed:(state)=>{
            state.isMenuOpen=false;
           }
    }

})

export const {ToggleMenu,isClosed} = appSlice.actions;
export default appSlice.reducer;