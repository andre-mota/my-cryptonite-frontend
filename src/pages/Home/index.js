// Import components
import PageHeader from "../../components/PageHeader";
import CryptoAssetsList from "../../components/CryptoAssets/List";

// CSS
import "./home.css";

import { Link } from "react-router-dom";

// Redux imports
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

// Material-ui imports
import Button from "@mui/material/Button";

export default function Home() {
  // Get token from the state
  const token = useSelector(selectToken);
  if (!token) {
    return (
      <div className="stack">
        <p>Track your crypto investments without missing any detail.</p>
        <Link to="/signup" className="noAccountButtons">
          <Button variant="contained">Signup</Button>
        </Link>
        <Link to="/login" className="noAccountButtons">
          <Button variant="outlined">Login</Button>
        </Link>
      </div>
    );
  }

  //TODO Get user's name
  return (
    <div>
      <PageHeader header="My Portfolio" />
      <CryptoAssetsList />
    </div>
  );
}
