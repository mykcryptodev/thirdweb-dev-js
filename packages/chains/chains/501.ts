import type { Chain } from "../src/types";
export default {
  "name": "Columbus Test Network",
  "chain": "CAM",
  "rpc": [
    "https://columbus-test-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://columbus.camino.network/ext/bc/C/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Camino",
    "symbol": "CAM",
    "decimals": 18
  },
  "infoURL": "https://camino.network/",
  "shortName": "Columbus",
  "chainId": 501,
  "networkId": 1001,
  "icon": {
    "url": "ipfs://QmSEoUonisawfCvT3osysuZzbqUEHugtgNraePKWL8PKYa",
    "width": 768,
    "height": 768,
    "format": "png"
  },
  "explorers": [
    {
      "name": "blockexplorer",
      "url": "https://suite.camino.network/explorer",
      "standard": "none"
    }
  ],
  "testnet": true,
  "slug": "columbus-test-network"
} as const satisfies Chain;