// src/components/CryptoAssets/Item.js

// Import CSS
import "./cryptoAssets.css";

// React & Redux imports
import { Link } from "react-router-dom";

/*
Each Crypto Asset Item will display:
    - Asset's name
    - Quantity of holdings
    - apy %
    - value in the user's selected currency
    - Payout type
    - Platform's name
    - A button to delete the asset
    - A button do edit the asset
*/

export default function CryptoAssetItem(props) {
  return (
    <tr className="CryptoAssetItem">
      <td>{props.currency.name}</td>
      <td>{props.quantity}</td>
      <td>{props.apy}%</td>
      <td>Calculate Value</td> {/*TODO: Calculate value*/}
      <td>{props.payoutTypeId}</td>
      <td>{props.name}</td>
      <td>EDIT | DELETE</td>
    </tr>
  );
}
