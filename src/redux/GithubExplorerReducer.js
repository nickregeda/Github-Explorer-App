import {gitAPI} from "../dal/api";

const SET_USERS = 'SET_USERS';
const SET_USERS_REPOS = 'SET_USERS_REPOS';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
    users: [],
    users_repos: [],
    profile: null,
};

const GithubExplorerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_USERS_REPOS:
            return {
                ...state,
                users_repos: action.repos,
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export default GithubExplorerReducer;

//action creators
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersRepos = (repos) => ({type: SET_USERS_REPOS, repos})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})

//thunk creators
export const getUsers = (q) => {
    return (dispatch) => {
        gitAPI.getUsers(q).then(
            response => {
                dispatch(setUsers(response));
            })
    }
}
export const getUsersRepos = (q) => {
    return (dispatch) => {
        gitAPI.getUsersRepos(q).then(
            response => {
                dispatch(setUsersRepos(response));
            })
    }
}
export const getProfile = (id) => {
    return (dispatch) => {
        return gitAPI.getProfile(id).then(
            response => {
                dispatch(setProfile(response));
            })
    }
}