import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import thunkMiddleware from 'redux-thunk'
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    ProfileReducer,
    UsersReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;