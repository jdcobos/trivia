
import { generalTypes } from "../types/generalData.types";

const initialState = {
    name:'',
    category:[],
    difficulty: ['easy', 'medium', 'hard', 'any difficulty']
};

const generalData = (state = initialState, action) => {
  switch (action.type) {
    case `${generalTypes.GET_CATEGORY}`:
      return {
        ...initialState,
        category: action.payload
      };
    default:
      return state;
  }
};

export default generalData;
