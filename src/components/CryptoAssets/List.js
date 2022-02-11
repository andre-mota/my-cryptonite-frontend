// src/components/Cryptoassets/List.js

// React & Redux imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import components
import CryptoAssetItem from "./Item";

// Import actions
import { fetchAllCryptoAssets } from "../../store/cryptoAssets/actions.js";
import { deleteCryptoAsset } from "../../store/cryptoAssets/actions.js";

// Import Selectors
import { selectAllCryptoAssets } from "../../store/cryptoAssets/selectors.js";

// material-ui imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function CryptoAssetsList() {
  const dispatch = useDispatch();
  const cryptoAssets = useSelector(selectAllCryptoAssets);

  // Fetch a list of all Crypto Assets on component load
  useEffect(() => {
    dispatch(fetchAllCryptoAssets());
  }, [dispatch]);

  // Delete term
  const handleDeleteTerm = (event, assetId) => {
    event.preventDefault();

    dispatch(deleteCryptoAsset(assetId));

    dispatch(fetchAllCryptoAssets());
  };

  // currencies calculation
  const calculateValue = (currency, holdings) => {
    switch (currency) {
      case "Ethereum": {
        return holdings * 3100.5;
      }
      case "Bitcoin": {
        return holdings * 37067.4;
      }
      case "Doge": {
        return holdings * 0.125168;
      }
      case "Shiba": {
        return holdings * 0.00001895;
      }
      default: {
        return holdings * 4000;
      }
    }
  };

  const showType = (typeId) => {
    switch (typeId) {
      case 1: {
        return "Daily";
      }
      case 2: {
        return "Start of the month";
      }
      case 3: {
        return "End of the month";
      }
      default: {
        return "Daily";
      }
    }
  };

  // Delete term
  // const handleEditTerm = (event, assetId) => {
  //   event.preventDefault();

  //   dispatch(deleteCryptoAsset(assetId));

  //   dispatch(fetchAllCryptoAssets());
  // };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Your Crypto Assets">
        <TableHead>
          <TableRow>
            <TableCell>Asset</TableCell>
            <TableCell>Holdings</TableCell>
            <TableCell>APY%</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Payout</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoAssets.map((asset) => (
            <TableRow
              key={asset.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to="/cryptoassets/1">{asset.currency.name}</Link>
              </TableCell>
              <TableCell align="right">{asset.quantity}</TableCell>
              <TableCell align="right">{asset.apy}%</TableCell>
              <TableCell align="right">
                {calculateValue(asset.currency.name, asset.quantity)}
              </TableCell>
              <TableCell align="right">
                {showType(asset.payoutTypeId)}
              </TableCell>
              <TableCell align="right">{asset.name}</TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={0}>
                  {/* <IconButton
                    aria-label="edit"
                    onClick={handleEditTerm(asset.id)}
                  >
                    <EditIcon />
                  </IconButton> */}
                  <IconButton
                    aria-label="delete"
                    onClick={(event) => handleDeleteTerm(event, asset.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </TableCell>
              {/* </Link> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
