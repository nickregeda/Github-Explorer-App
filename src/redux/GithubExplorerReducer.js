import {gitAPI} from "../dal/api";

const SET_USERS = 'SET_USERS';
const SET_USERS_REPOS = 'SET_USERS_REPOS';
const SET_PROFILE = 'SET_PROFILE';
const SET_LAST_SEEN_USER = 'SET_LAST_SEEN_USER';

const initialState = {
    users: [],
    users_repos: [],
    profile: null,
    last_seen_users: [],
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
        case SET_LAST_SEEN_USER:
            return {
                ...state,
                last_seen_users: state.last_seen_users.length < 10 && state.last_seen_users.every(user => user.id !== action.user.id) ? [...state.last_seen_users, action.user] : state.last_seen_users.every(user => user.id !== action.user.id) ? (state.last_seen_users.splice(0, 1), [...state.last_seen_users, action.user])
                    :
                    state.last_seen_users
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
export const setLastSeenUser = (id, login, avatar_url) => ({type: SET_LAST_SEEN_USER, user: {id, login, avatar_url}})

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
                debugger
                dispatch(setProfile(response));
                dispatch(setLastSeenUser(response.id, response.login, response.avatar_url))
            })
    }
}