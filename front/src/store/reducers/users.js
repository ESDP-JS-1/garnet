import {LOGIN_USER_SUCCESS} from "../actions/actionTypes";

const initialState = {
    loginError: null,
    user: null,
    token: null
};

const reducer = (state = initialState, action) => {
    switch (action.tyoe) {
        case LOGIN_USER_SUCCESS:
            return{...state, user: action.user, token: action.token, loginError: null}
    }
};