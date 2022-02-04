// src/components/PortfolioOptions/index.js

import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

import { useDispatch } from "react-redux";

// Actions
import { addNewAsset } from "../../store/cryptoAssets/actions";
import { fetchAllCryptoAssets } from "../../store/cryptoAssets/actions.js";

import { Link } from "react-router-dom";

// PortfolioOptions will show:
//  - A "refresh" button
//  - A "Add new"  button
//  - A privacy toggle

export default function PortfolioOption() {
  const dispatch = useDispatch();

  const [showAddNewTerm, setShowAddNewTerm] = useState(false);

  const handleClose = () => setShowAddNewTerm(false);
  const handleShow = () => setShowAddNewTerm(true);

  // Add new term
  const handleAddTerm = (event) => {
    event.preventDefault();

    dispatch(
      addNewAsset(
        newAssetCurrency,
        newAssetName,
        newAssetApy,
        newAssetQuantity,
        newAssetPayoutType
      )
    );

    setNewAssetCurrency("");
    setNewAssetName("");
    setNewAssetApy(0);
    setSetnewAssetQuantity(0);
    setNewAssetPayoutType(1);

    //TODO: check if failed
    setShowAddNewTerm(false);

    dispatch(fetchAllCryptoAssets());
  };

  // states for form
  const [newAssetCurrency, setNewAssetCurrency] = useState(3);
  const [newAssetName, setNewAssetName] = useState("");
  const [newAssetApy, setNewAssetApy] = useState(0);
  const [newAssetQuantity, setSetnewAssetQuantity] = useState(0);
  const [newAssetPayoutType, setNewAssetPayoutType] = useState(1);

  // select currency
  const handleCurrencyChange = (e) => {
    setNewAssetCurrency(e.target.value);
  };

  // select payout type
  const handlePayoutTypeChange = (e) => {
    setNewAssetPayoutType(e.target.value);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Term
      </Button>

      <Modal
        show={showAddNewTerm}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Title goes here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="AddNewTermForm">
            <p>
              Cryptocurrency:{" "}
              <select
                value={newAssetCurrency}
                onChange={(e) => handleCurrencyChange(e)}
              >
                <option value="3">Ethereum</option>
                <option value="4">Bitcoin</option>
                <option value="5">Doge</option>
                <option value="6">Shiba</option>
              </select>
            </p>
            <p>
              Name:{" "}
              <input
                type="text"
                placeholder="Name"
                value={newAssetName}
                onChange={(event) => {
                  setNewAssetName(event.target.value);
                }}
              />
            </p>
            <p>
              Quantity:{" "}
              <input
                type="number"
                placeholder="0"
                value={newAssetQuantity}
                onChange={(event) => {
                  setSetnewAssetQuantity(event.target.value);
                }}
              />
            </p>
            <p>
              APY %:{" "}
              <input
                type="number"
                placeholder="0"
                value={newAssetApy}
                onChange={(event) => {
                  setNewAssetApy(event.target.value);
                }}
              />
            </p>
            <p>
              Payout Type:{" "}
              <select
                value={newAssetPayoutType}
                onChange={(e) => handlePayoutTypeChange(e)}
              >
                <option value="1">Daily</option>
                <option value="2">End of the month</option>
                <option value="3">Start of the month</option>
              </select>
              {(event) => {
                setNewAssetPayoutType(event.target.value);
              }}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secundary" onClick={handleClose}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleAddTerm}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
