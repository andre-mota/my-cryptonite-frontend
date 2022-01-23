// src/store/cryptoAssets/actions

import { apiUrl } from "../../config/constants";
import axios from "axios";
// import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

/* GET /cryptoAssets */
// Type
export const CRYPTOASSETS_GET_ALL = "cryptoAssets/GET_ALL";

// Update the store
export function cryptoAssetsFetched(cryptoAssetsFromDB) {
  return {
    type: CRYPTOASSETS_GET_ALL,
    payload: cryptoAssetsFromDB,
  };
}

// Fetching
export const fetchAllCryptoAssets = (userId) => {
  return async (dispatch, getState) => {
    // Set app state as 'loading' until we can display the new data
    dispatch(appLoading());

    // Query the DB
    const response = await axios.get(`${apiUrl}/users/${userId}/cryptoassets`);

    // Update the store with all the new crypto assets details
    dispatch(cryptoAssetsFetched(response.data));

    // App state is no longer loading
    dispatch(appDoneLoading());
  };
};
