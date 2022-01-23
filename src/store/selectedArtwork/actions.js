// src/store/selectedArtwork/actions.js

import { apiUrl } from "../../config/constants";
import axios from "axios";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

/* GET /artworks/:artworkId */
// Type
export const ARTWORK_SELECTED = "artwork/SELECTED";

// Update the store
export function artworkFetched(artworkFromDB) {
  return {
    type: ARTWORK_SELECTED,
    payload: artworkFromDB,
  };
}

// Fetching
export const fetchSelectedArtwork = (artworkId) => {
  return async (dispatch, getState) => {
    // Set app state as 'loading' until we can display the new data
    dispatch(appLoading());
    try {
      // Query the DB
      const response = await axios.get(`${apiUrl}/artworks/${artworkId}`);

      // Update the store with all the new artwork's details
      dispatch(artworkFetched(response.data));

      // App state is no longer loading
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

/* Add Heart */
// Type
export const ARTWORK_ADD_HEART = "artwork/ADD_HEART";

// Patching
export const addHeart = (artworkId, hearts) => {
  hearts += 1;
  return async (dispatch, getState) => {
    // Set app state as 'loading' until we can display the new data
    dispatch(appLoading());

    try {
      // Send a PATCH request
      const response = await axios.patch(`${apiUrl}/artworks/${artworkId}`, {
        hearts,
      });

      // Update the store with all the new artwork's details
      dispatch(artworkFetched(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
