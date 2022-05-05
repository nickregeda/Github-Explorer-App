import {gitAPI} from "../dal/api";
import {setLastSeenUser} from "./UsersReducer";

const SET_USER_REPOS = 'SET_USER_REPOS';
const SET_PROFILE = 'SET_PROFILE';
const SET_REPOS_TOTAL_COUNT = 'SET_REPOS_TOTAL_COUNT';
const SET_REPOS_CURRENT_PAGE = 'SET_REPOS_CURRENT_PAGE';

const initialState = {
    user_repos: [],
    profile: null,

    repos_total_count: 0,
    repos_current_page: 1,
    repos_page_size: 15,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_REPOS:
            return {
                ...state,
                user_repos: action.repos,
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_REPOS_TOTAL_COUNT:
            return {
                ...state,
                repos_total_count: action.total_count,
            }
        case SET_REPOS_CURRENT_PAGE:
            return {
                ...state,
                repos_current_page: action.page,
            }
        default:
            return state;
    }
}

export default ProfileReducer;

//action creators
export const setUserRepos = (repos) => ({type: SET_USER_REPOS, repos});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setReposCurrentPage = (page) => ({type: SET_REPOS_CURRENT_PAGE, page});
export const setTotalReposCount = (total_count) => ({type: SET_REPOS_TOTAL_COUNT, total_count});

//thunk creators
export const getUserRepos = (q, per_page, page) => {
    return (dispatch) => {
        gitAPI.getUserRepos(q, per_page, page).then(
            response => {
                dispatch(setUserRepos(response));
            })
    }
}
export const getProfile = (id) => {
    return (dispatch) => {
        return gitAPI.getProfile(id).then(
            response => {
                dispatch(setProfile(response));
                dispatch(setLastSeenUser(response.id, response.login, response.avatar_url))
                dispatch(setTotalReposCount(response.public_repos));
            })
    }
}