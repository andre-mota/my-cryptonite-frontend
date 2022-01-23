// src/store/selectedArtwork/reducer.js

import { ARTWORK_SELECTED } from "./actions";

// Create an inital state that will hold an array named 'list'
const initialState = {
  item: {},
};

export default function selectedArtworkReducer(state = initialState, action) {
  switch (action.type) {
    case ARTWORK_SELECTED: {
      return {
        item: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
