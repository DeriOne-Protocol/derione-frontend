import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1]
});

const RPC_URLS: { [chainId: number]: string } = {
  1: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}` as string
};
const POLLING_INTERVAL = 12000;

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});
