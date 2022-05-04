import {applyMiddleware, combineReducers, createStore} from "redux";
import GithubExplorerReducer from "./GithubExplorerReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    GithubExplorerReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;