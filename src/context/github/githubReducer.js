import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS: return {
            ...state,           //it would copy whatever is there in the current state(state is immutable so that we have to make a copy of whole state object and return it)
            users: action.payload,  //copying the data coming from GithubState
            loading: false
        };
        case GET_USER: return {
            ...state,
            user: action.payload,
            loading: false
        };
        case CLEAR_USERS: return {
            ...state,
            users: [],
            loading: false
        };
        case GET_REPOS: return {
            ...state,
            repos: action.payload,
            loading: false
        };
        case SET_LOADING: return {
            ...state,
            loading: true
        }
        default: return state;
    };
}
