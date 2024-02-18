import { createSlice } from "@reduxjs/toolkit";

interface ILougOutState {
    isLoggedOut: boolean,
    isLoggingOut: boolean,
    error: boolean
}

const initialState : ILougOutState = {
    isLoggedOut: false,
    isLoggingOut: false,
    error: false
}

const userlogoutSlice = createSlice({
    name: 'userlogout',
    initialState,
    reducers: {
        loggingOutUser : (state : ILougOutState) =>{
            return{
                ...state,
                isLoggedOut: false,
                isLoggingOut: true,
                error: false
            }
        },
        loggedOutUser : (state : ILougOutState) =>{
            return{
                ...state,
                isLoggedOut: true,
                isLoggingOut: false,
                error: false
            }
        },
        logoutFailed : (state : ILougOutState) =>{
            return{
                ...state,
                isLoggedOut: false,
                isLoggingOut: false,
                error: true
            }
        }
    }
});

export const { loggingOutUser, loggedOutUser, logoutFailed } = userlogoutSlice.actions;
export default userlogoutSlice.reducer;