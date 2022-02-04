// src/store/cryptoAssets/reducer.js

import { CRYPTOASSETS_GET_ALL, CRYPTOASSETS_DELETE } from "./actions";

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
    // case CRYPTOASSETS_DELETE: {
    //   return {
    //     ...state,
    //     list:
    //   }
    // }
    default: {
      return state;
    }
  }
}
