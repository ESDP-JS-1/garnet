import {FETCH_USER_SUCCESS} from "../actions/actionTypes";

const initialState = {
    usersList: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {...state,usersList: action.users};
        default:
            return state;
    }
};

export default reducer;
