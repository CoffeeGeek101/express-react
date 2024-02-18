import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserLoginState {
    isLoggedin: boolean;
    isLoggingin: boolean;
    error: boolean;
}

const initialState : UserLoginState = {
    isLoggedin: false,
    isLoggingin: false,
    error: false,
}

interface ILoginData {
    email: string | null;
    password: string | null;
}

const userloginSlice = createSlice({
    name: 'userlogin',
    initialState,
    reducers: {
        logginginUser: (state, action:PayloadAction<ILoginData>) => {
            return{
                ...state,
                isLoggedin: false,
                isLoggingin: true,
                error: false,
                user : action.payload
            }
        },
        loggedinUser: (state, action : PayloadAction<{isAuthenticated : true}>) => {
            return{
                ...state,
                isLoggedin: action.payload.isAuthenticated,
                isLoggingin: false,
                error: false,
            }
        },
        loginFailedUser: (state) => {
            return{
                ...state,
                isLoggedin: false,
                isLoggingin: false,
                error: true,
            }
        }
    }
});

export const { logginginUser, loggedinUser, loginFailedUser } = userloginSlice.actions;
export default userloginSlice.reducer;