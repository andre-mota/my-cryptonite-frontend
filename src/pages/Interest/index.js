// Import components
import PageHeader from "../../components/PageHeader";

import { Link } from "react-router-dom";

// Redux imports
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

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

// Material-ui imports
import Button from "@mui/material/Button";

export default function Interest() {
  return (
    <div>
      <PageHeader header="Interest Payout" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Your Crypto Assets">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Quantity earned</TableCell>
              <TableCell>Value (€)</TableCell>
              <TableCell>Overall Quantity</TableCell>
              <TableCell>Overal Value (€)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"04/02/2022"}
              </TableCell>
              <TableCell align="right">{"0.0003474634"}</TableCell>
              <TableCell align="right">{"1.0423902"}</TableCell>
              <TableCell align="right">{"2.5020840568"}</TableCell>
              <TableCell align="right">{"7506.25"}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"03/02/2022"}
              </TableCell>
              <TableCell align="right">{"0.0003474152"}</TableCell>
              <TableCell align="right">{"1.0422456"}</TableCell>
              <TableCell align="right">{"2.5017365934"}</TableCell>
              <TableCell align="right">{"7505.21"}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"02/02/2022"}
              </TableCell>
              <TableCell align="right">{"0.0003473669"}</TableCell>
              <TableCell align="right">{"1.0421007"}</TableCell>
              <TableCell align="right">{"2.5017365934"}</TableCell>
              <TableCell align="right">{"7504.17"}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"01/02/2022"}
              </TableCell>
              <TableCell align="right">{"0.0003473187"}</TableCell>
              <TableCell align="right">{"1.0419561"}</TableCell>
              <TableCell align="right">{"2.5013891782"}</TableCell>
              <TableCell align="right">{"7503.13"}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"31/01/2022"}
              </TableCell>
              <TableCell align="right">{"0.0003473187"}</TableCell>
              <TableCell align="right">{"1.0419561"}</TableCell>
              <TableCell align="right">{"2.5010418113"}</TableCell>
              <TableCell align="right">{"7502.08"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
