import {call,put,all,takeLatest, delay} from 'redux-saga/effects';
import { authenticatedUser, authenticatingUser, authenticationFailed } from '../redux/usersigninSlice';
import mongoAPI from '../api/db';
import { loggedOutUser, loggingOutUser, logoutFailed } from '../redux/userlogoutSlice';
import { loggedinUser, logginginUser, loginFailedUser} from '../redux/userloginSlice';

const api = new mongoAPI();

function* signInUser(action : any){
    try{
        yield delay(2000);
        yield put(authenticatedUser(yield call(api.userSignIn, action.payload)));
    }catch(error){
        yield put(authenticationFailed());
    }
}

function* logOutUser(){
    try{
        yield delay(2000);
        yield put(loggedOutUser(yield call(api.userLogOut)));
    }catch(error){
        yield put(logoutFailed());
    }
}

function* logInUser(action : any){
    try{
        yield delay(2000);
        
    }catch(error){yield put(loggedinUser(yield call(api.userLogIn, action.payload)));
        yield put(loginFailedUser());
    }
}

export default function* watcherSaga(){
    yield all([
        takeLatest(authenticatingUser.type, signInUser),
        takeLatest(loggingOutUser.type, logOutUser),
        takeLatest(logginginUser.type, logInUser)
    ])
}
