import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : UserSigninState = {
    isAunthenticated: false,
    isAuthenticating: false,
    error: null
}

interface IUserData {
    name: string | null;
    email: string | null;
    password: string | null;
}

interface UserSigninState {
    isAunthenticated: boolean,
    isAuthenticating: boolean,
    error: any
}

const usersigninSlice = createSlice({
    name: 'usersignin',
    initialState,
    reducers: {
        authenticatingUser : (state : UserSigninState, action : PayloadAction<IUserData>) =>{
           return{
            ...state,
            isAuthenticating: true,
            isAunthenticated: false,
            error: null,
            user : action.payload
           }
        },
        authenticatedUser : (state : UserSigninState, action : PayloadAction<{isAuthenticated : boolean}>) =>{
            return{
                ...state,
                isAunthenticated : action.payload.isAuthenticated,
                isAuthenticating : false,
                error: null
            }
        },
        authenticationFailed : (state : UserSigninState) =>{
            return{
                ...state,
                isAunthenticated : false,
                isAuthenticating : false,
            }
        }
    }
});

export const { authenticatingUser, authenticatedUser, authenticationFailed } = usersigninSlice.actions;
export default usersigninSlice.reducer;
