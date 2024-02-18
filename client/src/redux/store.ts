import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import signinReducer from './usersigninSlice';
import logoutReducer from './userlogoutSlice';
import loginReducer from './userloginSlice'
import watcherSaga from "../saga/sagaIndex";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer :{
        signin : signinReducer,
        logout : logoutReducer,
        login : loginReducer
    },
    middleware : (getDefaultMiddleware)=>{
        return getDefaultMiddleware({thunk : false}).prepend(sagaMiddleware);
    }
});

sagaMiddleware.run(watcherSaga);

export const useAppDispatch:() => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;
