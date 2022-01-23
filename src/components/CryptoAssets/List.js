// src/components/Cryptoassets/List.js

// React & Redux imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import components
import CryptoAssetItem from "./Item";

// Import actions
import { fetchAllCryptoAssets } from "../../store/cryptoAssets/actions.js";

// Import Selectors
import { selectAllCryptoAssets } from "../../store/cryptoAssets/selectors.js";

export default function CryptoAssetsList() {
  const dispatch = useDispatch();
  const cryptoAssets = useSelector(selectAllCryptoAssets);

  // Fetch a list of all Crypto Assets on component load
  useEffect(() => {
    dispatch(fetchAllCryptoAssets());
  }, [dispatch]);

  return (
    <div className="CryptoAssetsList">
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Holdings</th>
            <th>APY%</th>
            <th>Value</th> {/*TODO: add currency symbol inside () */}
            <th>Payout</th>
            <th>Platform</th>
            <th> </th> {/* column for buttons */}
          </tr>
        </thead>
        <tbody>
          {cryptoAssets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.currency.name}</td>
              <td>{asset.quantity}</td>
              <td>{asset.apy}%</td>
              <td>Calculate Value</td> {/*TODO: Calculate value*/}
              <td>{asset.payoutTypeId}</td>
              <td>{asset.name}</td>
              <td>EDIT | DELETE</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
