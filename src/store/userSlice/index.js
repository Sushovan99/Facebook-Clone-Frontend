import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        login: (state, payload) => {},
    },
});

export const userReducer = userSlice.reducer;
