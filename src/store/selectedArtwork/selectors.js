// src/store/selectedArtwork/selectors.js

export function selectSelectedArtwork(reduxState) {
  return reduxState.selectedArtwork.item;
}

// Select Hearts
export function selectedArtworkHeartwork(reduxState) {
  return reduxState.selectedArtwork.item.hearts;
}
