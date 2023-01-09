import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;

const userSlice = createSlice({
    name: "user-data",
    initialState: userData ? userData : null,
    reducers: {
        login: (state, action) => {
            state = action.payload;
        },
        signUp: (state, action) => {
            state = action.payload;
        },
    },
});

export const { login, signUp } = userSlice.actions;

export const userReducer = userSlice.reducer;
