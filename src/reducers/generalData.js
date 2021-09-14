
import { generalTypes } from "../types/generalData.types";

const initialState = {
    categories:[],
    difficulties: ['easy', 'medium', 'hard', 'any difficulty'],
    userData:{
      name:'',
      category: '',
      difficulty: '',
      score: 0,
      numberQuestion: 0,
    }
};

const generalData = (state = initialState, action) => {
  switch (action.type) {
    case `${generalTypes.GET_CATEGORY}`:
      return {
        ...state,
        categories: action.payload
      };
    case `${generalTypes.SET_USER_DATA}`:
      return {
        ...state,
        userData: {...state.userData, ...action.payload}
      };
    case `${generalTypes.SET_CLEAN_DATA}`:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default generalData;
