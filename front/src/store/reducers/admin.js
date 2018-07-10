import {
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS, FETCH_SINGLE_USERS_SUCCESS,
    FETCH_USER_SUCCESS, REMOVE_USER_FAILURE, REMOVE_USER_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    usersList: null,
    singleUser: null,
    createUserError: null,
    removeUserError: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {...state, usersList: action.users};
        case CREATE_USER_SUCCESS:
            return {...state, createUserError: null};
        case CREATE_USER_FAILURE:
            return {...state, createUserError: action.error};
        case REMOVE_USER_SUCCESS:
            let listUser = [...state.usersList];
            const index = listUser.findIndex(user => user._id === action.id);
            listUser.splice(index, 1);
            return {...state, usersList: listUser, removeUserError: null};
        case REMOVE_USER_FAILURE:
            return {...state, removeUserError: action.error};
        case FETCH_SINGLE_USERS_SUCCESS:
            return {...state, singleUser: action.user};
        default:
            return state;
    }
};

export default reducer;
