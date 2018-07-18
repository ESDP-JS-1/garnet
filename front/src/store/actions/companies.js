import axios from '../../axios-api';
import {
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_ERROR
} from "./actionTypes";

const fetchCompaniesSuccess = (data) => {
    return {type: FETCH_COMPANIES_SUCCESS, data}
};

const fetchCompaniesError = (err) => {
    return {type: FETCH_COMPANIES_ERROR}
};

export const deleteCompany = id =>{
    console.log(id);
    return dispatch => {
        // return axios.delete(`/companies/:${id}`).then(
        //    dispatch(fetchAllCompanies())
        // )
    }
};

export const fetchAllCompanies = () => {
    return dispatch => {
        return axios.get('/companies').then(
            response => {
                dispatch(fetchCompaniesSuccess(response.data))
            },
            error => {
                dispatch(fetchCompaniesError(error))
            }
        )
    }
};

