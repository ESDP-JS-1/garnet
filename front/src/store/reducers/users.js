import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from "../actions/actionTypes";

const initialState = {
    registerError: null,
    loginError: null,
    user: null,
    token: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, token: action.token, loginError: null};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error};
        case LOGOUT_USER:
            return {...state, user: null};
        default:
            return state;
    }
};

export default reducer;
