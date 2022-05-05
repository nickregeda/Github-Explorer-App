import {gitAPI} from "../dal/api";

const SET_USERS = 'SET_USERS';
const SET_LAST_SEEN_USER = 'SET_LAST_SEEN_USER';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_USERS_CURRENT_PAGE = 'SET_USERS_CURRENT_PAGE';

const initialState = {
    users_current_page: 1,
    users_total_count: 0,
    users_page_size: 20,

    users: [],
    last_seen_users: [],
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_LAST_SEEN_USER:
            return {
                ...state,
                last_seen_users: state.last_seen_users.length < 10 && state.last_seen_users.every(user => user.id !== action.user.id) ?
                    [...state.last_seen_users, action.user]
                    :
                    state.last_seen_users.every(user => user.id !== action.user.id) ?
                        (state.last_seen_users.splice(0, 1), [...state.last_seen_users, action.user])
                        :
                        state.last_seen_users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                users_total_count: action.total_count,
            }
        case SET_USERS_CURRENT_PAGE:
            return {
                ...state,
                users_current_page: action.page,
            }
        default:
            return state;
    }
}

export default UsersReducer;

//action creators
export const setUsers = (users) => ({type: SET_USERS, users});
export const setLastSeenUser = (id, login, avatar_url) => ({type: SET_LAST_SEEN_USER, user: {id, login, avatar_url}})
export const setTotalUsersCount = (total_count) => ({type: SET_TOTAL_USERS_COUNT, total_count})
export const setUsersCurrentPage = (page) => ({type: SET_USERS_CURRENT_PAGE, page})

//thunk creators
export const getUsers = (q, per_page, page) => {
    return (dispatch) => {
        return gitAPI.getUsers(q, per_page, page).then(
            response => {
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.total_count));
                return response.items;
            })
    }
}