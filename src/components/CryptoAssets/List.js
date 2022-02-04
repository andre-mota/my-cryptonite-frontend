// src/components/Cryptoassets/List.js

// React & Redux imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
                {asset.currency.name}
              </TableCell>
              <TableCell align="right">{asset.quantity}</TableCell>
              <TableCell align="right">{asset.apy}%</TableCell>
              <TableCell align="right">Calculate value</TableCell>{" "}
              {/** function calculatePrice(currency, holdings) */}
              <TableCell align="right">{asset.payoutTypeId}</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
