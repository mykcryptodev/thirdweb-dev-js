import type { Chain } from "../src/types";
export default {
  "name": "Kinto Testnet",
  "title": "Kinto Testnet",
  "chain": "ETH",
  "rpc": [
    "https://kinto-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "http://35.215.120.180:8545"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://ethereum.org",
  "shortName": "keth",
  "chainId": 42888,
  "networkId": 42888,
  "explorers": [
    {
      "name": "kintoscan",
      "url": "http://35.215.120.180:4000",
      "standard": "EIP3091"
    }
  ],
  "testnet": true,
  "slug": "kinto-testnet"
} as const satisfies Chain;