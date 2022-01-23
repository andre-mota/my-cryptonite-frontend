import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import cryptoAssets from "./cryptoAssets/reducer";
import selectedArtwork from "./selectedArtwork/reducer";

export default combineReducers({
  appState,
  user,
  cryptoAssets,
  selectedArtwork,
});
