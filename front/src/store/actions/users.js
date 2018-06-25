import axios from '../../axios-api';
import {NotificationManager} from 'react-notifications';
import {push} from 'react-router-redux';
import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from "./actionTypes";


const loginUserSuccess = (user, token) => {
    return {type: LOGIN_USER_SUCCESS, user, token};
};


const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};


export const loginUser = userData => {
    return dispatch => {
        return axios.post('/users', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data.user, response.data.user.token));
                dispatch(push(`${response.data.user.role}/${response.data.user.username}`));
                NotificationManager.success('Success', response.data.message);
            },
            error => {
                const errorObj = error.response ? error.response.data : {error: 'No internet'};
                dispatch(loginUserFailure(errorObj));
            }
        )
    }
};


export const logoutUser = () => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {'Token': token};
        axios.delete('/users', {headers}).then(
            response => {
                dispatch({type: LOGOUT_USER});
                dispatch(push('/'));
                NotificationManager.success('Success', 'Logout successful');
            },
            error => {
                NotificationManager.error('Error', 'Could not logout');
            }
        );
    }
};

export const logoutExpiredUser = () => {
    return dispatch => {
        dispatch({type: LOGOUT_USER});
        dispatch(push('/'));
        NotificationManager.error('Error', 'Your session has expired, please login again');
    }
};

