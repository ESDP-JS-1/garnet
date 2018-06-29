import axios from '../../axios-api';
import {
  FETCH_SKILL_CATEGORY_ERROR,
  FETCH_SKILL_CATEGORY_REQUEST,
  FETCH_SKILL_CATEGORY_SUCCESS,
  FETCH_SKILL_ERROR,
  FETCH_SKILL_REQUEST,
  FETCH_SKILL_SUCCESS
} from "./actionTypes";

const fetchSkillSuccess = (data) => {
  return {type: FETCH_SKILL_SUCCESS, data}
};

const fetchSkillRequest = () => {
  return {type: FETCH_SKILL_REQUEST}
};

const fetchSkillError = (err) => {
  return {type: FETCH_SKILL_ERROR}
};

export const fetchSkill = () => {
  return dispatch => {
    dispatch(fetchSkillRequest())
    return axios.get('/skills').then(
      response => {
        dispatch(fetchSkillSuccess(response.data))
      },
      error => {
        dispatch(fetchSkillError(error))
      }
    )
  }
};

const fetchSkillCategorySuccess = (data) => {
  return {type: FETCH_SKILL_CATEGORY_SUCCESS, data}
};

const fetchSkillCategoryRequest = () => {
  return {type: FETCH_SKILL_CATEGORY_REQUEST}
};

const fetchSkillCategoryError = (err) => {
  return {type: FETCH_SKILL_CATEGORY_ERROR}
};

export const fetchSkillCategory = () => {
  return dispatch => {
    dispatch(fetchSkillCategoryRequest())
    return axios.get('/skill-categories').then(
      response => {
        dispatch(fetchSkillCategorySuccess(response.data))
      },
      error => {
        dispatch(fetchSkillCategoryError(error))
      }
    )
  }
};

