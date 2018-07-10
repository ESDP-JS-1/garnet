import {push} from 'react-router-redux';
import {NotificationManager} from 'react-notifications';
import axios from "../../axios-api";
import {
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS, FETCH_SINGLE_USERS_FAILURE, FETCH_SINGLE_USERS_SUCCESS,
    FETCH_USER_SUCCESS,
    REMOVE_USER_FAILURE,
    REMOVE_USER_SUCCESS
} from "./actionTypes";


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

export const createUserSuccess = () => {
    return {type: CREATE_USER_SUCCESS};
};

export const createUserFailure = error => {
    return {type: CREATE_USER_FAILURE, error}
};

export const createUser = userData => {
    return dispatch => {
        return axios.post('/users/create', userData).then(
            () => {
                dispatch(createUserSuccess());
                dispatch(push('/users-list'));
                NotificationManager.success('Success', 'User successfully created!');
            },
            error => {
                console.log(error.response.data);
                dispatch(createUserFailure(error.response.data))
            }
        );
    };
};

export const removeUserSuccess = id => {
  return {type: REMOVE_USER_SUCCESS, id};
};

export const removeUserFailure = error => {
  return {type: REMOVE_USER_FAILURE, error};
};

export const removeUser = id => {
  return dispatch => {
      return axios.delete(`/users/${id}`).then(
          () => {
              dispatch(removeUserSuccess(id));
              NotificationManager.success('Success', 'User successfully deleted!');
          },
          error => {
              dispatch(removeUserFailure(error.response.data));
          }
      )
  }
};

export const fetchSingleUserSuccess = user => {
  return {type: FETCH_SINGLE_USERS_SUCCESS, user};
};

export const fetchSingleUserFailure = () => {
  return {type: FETCH_SINGLE_USERS_FAILURE};
};

export const fetchSingleUser = id => {
  return dispatch => {
      return axios.get(`/users/${id}`).then(
          response => {
              dispatch(fetchSingleUserSuccess((response.data)));
          },
          error => {
              dispatch(fetchSingleUserFailure(error.response.data));
          }
      )
  }
};






















