// src/store/cryptoAssets/reducer.js

import { CRYPTOASSETS_GET_ALL } from "./actions";

// Create an inital state that will hold an array named 'list'
const initialState = {
  list: [],
};

export default function cryptoAssetsReducer(state = initialState, action) {
  switch (action.type) {
    case CRYPTOASSETS_GET_ALL: {
      return {
        ...state,
        list: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
