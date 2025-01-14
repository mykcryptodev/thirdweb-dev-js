import type { Chain } from "../src/types";
export default {
  "name": "TBSI Testnet",
  "title": "Thai Blockchain Service Infrastructure Testnet",
  "chain": "TBSI",
  "rpc": [
    "https://tbsi-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.testnet.blockchain.or.th"
  ],
  "faucets": [
    "https://faucet.blockchain.or.th"
  ],
  "nativeCurrency": {
    "name": "Jinda",
    "symbol": "JINDA",
    "decimals": 18
  },
  "infoURL": "https://blockchain.or.th",
  "shortName": "tTBSI",
  "chainId": 1708,
  "networkId": 1708,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://exp.testnet.blockchain.or.th",
      "standard": "EIP3091"
    }
  ],
  "testnet": true,
  "slug": "tbsi-testnet"
} as const satisfies Chain;