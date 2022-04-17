import {createSlice} from "@reduxjs/toolkit";

export const navtogSlice = createSlice({
    name: 'navtog',
    initialState: {
        active: false
    },
    reducers: {
        toggleActive: (state) => {
            state.active = !state.active;
        }
    }
});

export const navtogActions = navtogSlice.actions;

export default navtogSlice.reducer;
