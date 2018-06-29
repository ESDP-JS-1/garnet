import {FETCH_SKILL_CATEGORY_SUCCESS, FETCH_SKILL_SUCCESS} from "../actions/actionTypes";

const initialState = {
  listCategory: [],
  listSkills: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SKILL_SUCCESS:
      return {...state, listSkills: action.data};
    case FETCH_SKILL_CATEGORY_SUCCESS:
      return {...state, listCategory: action.data};
    default:
      return state
  }
};

export default reducer;