import axios from "axios"
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk"

const aptosConfig = new AptosConfig({
    network: Network.MAINNET,
})
const aptos = new Aptos(aptosConfig);

const headers = {
    "x-api-user": process.env.REACT_APP_INDEXER_API_USER,
    "x-api-key": process.env.REACT_APP_INDEXER_API_KEY,
}

const fetchNftV1 = async (moduleAddress) => {
    const nfts = await aptos.view(
        {
            payload: {
                function: `${moduleAddress}::nft_lottery::see_nft_details`
            }
        }
    )

    if (!nfts || nfts[0].length === 0) {
        console.log("No NFTs found")
        return
    }

    const nftImages = []

    await Promise.all(

        nfts[0].map(async (element) => {
            const tokenId = encodeURI(element.token_name);
            const query = `
            query MyQuery($id: String = "") {
                aptos {
                  nfts(
                    where: { token_id: { _eq: $id }}
                  ) {
                    media_url
                  }
                }
              }`

            const res = await axios({
                url: "https://api.indexer.xyz/graphql",
                method: 'post',
                data: {
                    query,
                    variables: {
                        id: tokenId
                    }
                },
                headers
            })

            const mediaUrl = res?.data?.data?.aptos?.nfts[0]?.media_url

            try {
                const metadata = await fetch(mediaUrl)
                const metadataJson = await metadata.json()
                nftImages.push({
                    image: metadataJson?.image,
                    name: element.token_name,
                    store: element.store.inner,
                    floorPrice: element.token_floor_price,
                })
            }
            catch (error) {
                nftImages.push({
                    image: mediaUrl,
                    name: element.token_name,
                    store: element.store.inner,
                    floorPrice: element.token_floor_price,
                })
            }
        })
    )

    return nftImages
}

const fetchNftV2 = async (moduleAddress) => {
    const nfts = await aptos.view(
        {
            payload: {
                function: `${moduleAddress}::nft_lottery::see_nft_v2_details`
            }
        }
    )

    if (!nfts || nfts[0].length === 0) {
        console.log("No NFTs found")
        return
    }

    const nftImages = [];

    await Promise.all(
        nfts[0].map(async (element) => {
            const tokenId = element?.token_address?.inner;
            const query = `
                query MyQuery($id: String = "") {
                    aptos {
                    nfts(
                        where: { token_id: { _eq: $id }}
                    ) {
                        media_url
                    }
                    }
                }`;

            const res = await axios({
                url: "https://api.indexer.xyz/graphql",
                method: 'post',
                data: {
                    query,
                    variables: { id: tokenId },
                },
                headers,
            });

            const mediaUrl = res?.data?.data?.aptos?.nfts[0]?.media_url;

            try {
                const metadata = await fetch(mediaUrl);
                const metadataJson = await metadata.json();
                nftImages.push({
                    image: metadataJson?.image,
                    name: element.token_address.inner,
                    store: element.store.inner,
                    floorPrice: element.token_floor_price,
                });
            } catch (error) {
                nftImages.push({
                    image: mediaUrl,
                    name: element.token_address.inner,
                    store: element.store.inner,
                    floorPrice: element.token_floor_price,
                });
            }
        })
    );

    return nftImages
}

export { fetchNftV1, fetchNftV2 }