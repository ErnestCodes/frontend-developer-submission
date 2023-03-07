import { useEffect, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const contractAddress = process.env.NEXT_PUBLIC_ADDRESS;

const settings = {
  apiKey: API_KEY,
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(settings);

export default function useFetchData() {
  const [fetchedData, setFetchedData] = useState<any[]>();

  useEffect(() => {
    async function performRequest() {
      if (!contractAddress) {
        return;
      }

      const resolveRes = (await alchemy.nft.getNftsForContract(contractAddress))
        .nfts;
      setFetchedData(resolveRes);
    }

    performRequest();
  }, []);

  return fetchedData;
}
