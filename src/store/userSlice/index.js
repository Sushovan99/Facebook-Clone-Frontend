import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;

const userSlice = createSlice({
    name: "user-data",
    initialState: {
        user: userData ? userData.user : null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
        },
        signUp: (state, action) => {
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, signUp, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
