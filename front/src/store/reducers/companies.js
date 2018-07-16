import {FETCH_COMPANIES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    companiesList: [],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMPANIES_SUCCESS:
            return {...state, companiesList: action.data};
        default:
            return state
    }
};

export default reducer;