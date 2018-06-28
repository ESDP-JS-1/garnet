import {FETCH_USER_SUCCESS} from "./actionTypes";
import axios from "../../axios-api";

const fetchUsersSuccess = (users) => {
    return {type: FETCH_USER_SUCCESS, users};
};


export const fetchAllUsers = () => {
    return dispatch => {
        axios.get('/users/user-list').then(
            response => dispatch(fetchUsersSuccess(response.data))
        );
    }
};

export const  addInfo  = infoData => {


};

