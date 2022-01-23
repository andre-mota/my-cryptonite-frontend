// Import components
import PageHeader from "../../components/PageHeader";
import CryptoAssetsList from "../../components/CryptoAssets/List";

export default function Home() {
  //TODO Get user's name
  return (
    <div>
      <PageHeader header="My Portfolio" />
      <CryptoAssetsList />
    </div>
  );
}
