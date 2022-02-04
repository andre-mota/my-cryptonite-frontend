// src/pages/PortfolioPage/index.js

// React & Redux imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Import actions
import { fetchSelectedArtwork } from "../../store/selectedArtwork/actions.js";

// Import Selectors
import { selectSelectedArtwork } from "../../store/selectedArtwork/selectors.js";

// Import components
import PageHeader from "../../components/PageHeader";
import ArtworkDetails from "../../components/Artwork/Details";
import ArtworkBids from "../../components/Artwork/Bids";
import Loading from "../../components/Loading";

export default function ArtworkFullDetails() {
  const dispatch = useDispatch();

  // Get artworkId from url param
  const { artworkId } = useParams();

  // Fetch Artwork's details on component load
  useEffect(() => {
    dispatch(fetchSelectedArtwork(artworkId));
  }, [dispatch, artworkId]);

  // Select data from the Redux Store
  const artwork = useSelector(selectSelectedArtwork);

  // Check if artwork has data yet
  if (!artwork) {
    return <Loading />;
  }

  return (
    <div className="SelectedArtwork">
      <PageHeader header={artwork.title} subHeader={artwork.user?.name} />
      <ArtworkDetails {...artwork} />
      <ArtworkBids bids={artwork.bids} minimumBid={artwork.minimumBid} />
    </div>
  );
}
