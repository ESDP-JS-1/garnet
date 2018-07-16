import axios from '../../axios-api';
import {
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_ERROR
} from "./actionTypes";

const fetchCompaniesSuccess = (data) => {
    return {type: FETCH_COMPANIES_SUCCESS, data}
};

// const fetchSkillRequest = () => {
//     return {type: FETCH_SKILL_REQUEST}
// };
//
// const fetchSkillError = (err) => {
//     return {type: FETCH_SKILL_ERROR}
// };
//
// export const fetchSkill = () => {
//     return dispatch => {
//         dispatch(fetchSkillRequest());
//         return axios.get('/skills').then(
//             response => {
//                 dispatch(fetchSkillSuccess(response.data))
//             },
//             error => {
//                 dispatch(fetchSkillError(error))
//             }
//         )
//     }
// };
//
// const fetchSkillCategorySuccess = (data) => {
//     return {type: FETCH_SKILL_CATEGORY_SUCCESS, data}
// };
//
// const fetchSkillCategoryRequest = () => {
//     return {type: FETCH_SKILL_CATEGORY_REQUEST}
// };
//
const fetchCompaniesError = (err) => {
    return {type: FETCH_COMPANIES_ERROR}
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

