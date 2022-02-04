// src/store/cryptoAssets/actions

import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { selectUser } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

import { logOut } from "../user/actions";

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
export const fetchAllCryptoAssets = () => {
  return async (dispatch, getState) => {
    // Get token from the state
    const token = selectToken(getState());
    if (token === null) return;

    const user = selectUser(getState());
    if (user === null) return;

    // Set app state as 'loading' until we can display the new data
    dispatch(appLoading());
    try {
      // Query the DB
      const response = await axios.get(`${apiUrl}/users/cryptoassets`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update the store with all the new crypto assets details
      dispatch(cryptoAssetsFetched(response.data));

      // App state is no longer loading
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response, get rid of the token by logging out
      dispatch(logOut());

      dispatch(appDoneLoading());
    }
  };
};

/* POST /cryptoAssets */
// Type
export const CRYPTOASSETS_ADD = "cryptoAsset/ADD";

// Update the store
export function newCryptoAssetAdded(newCryptoAsset) {
  return {
    type: CRYPTOASSETS_ADD,
    payload: newCryptoAsset,
  };
}

// API request
export const addNewAsset = (
  newAssetCurrency,
  newAssetName,
  newAssetApy,
  newAssetQuantity,
  newAssetPayoutType
) => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());
    if (token === null) return;

    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/users/cryptoassets`,
        {
          newAssetCurrency,
          newAssetName,
          newAssetApy,
          newAssetQuantity,
          newAssetPayoutType,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update the store with the new crypto asset details
      dispatch(newCryptoAssetAdded(response.data));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
    }
    dispatch(appDoneLoading());
  };
};

/* Delete asset */
// Type
export const CRYPTOASSETS_DELETE = "cryptoAsset/DELETE";

// Update the store
export function cryptoAssetDeleted(deleteCryptoAssetId) {
  return {
    type: CRYPTOASSETS_DELETE,
    payload: deleteCryptoAssetId,
  };
}

// API request
export const deleteCryptoAsset = (deleteCryptoAssetId) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;

    dispatch(appLoading());

    try {
      const response = await axios.delete(
        `${apiUrl}/users/cryptoassets/${deleteCryptoAssetId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(cryptoAssetDeleted(response.data));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
    }
  };
};
