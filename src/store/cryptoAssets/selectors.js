// src/store/cryptoAssets/selectors.js

export function selectAllCryptoAssets(reduxState) {
  return reduxState.cryptoAssets.list;
}
