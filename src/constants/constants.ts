export const ASSET_NAMES = {
  Invalid: 0,
  DAI: 1,
  ETH: 2,
  SUSHI: 3,
  UNI: 4,
  USDC: 5,
  WBTC: 6,
  WETH: 7,
  YFI: 8
};

export const OPTION_TYPE_NAMES = {
  Invalid: 0,
  Put: 1,
  Call: 2
};

export const ASSET_NUMBERS = {
  0: "Invalid",
  1: "DAI",
  2: "ETH",
  3: "SUSHI",
  4: "UNI",
  5: "USDC",
  6: "WBTC",
  7: "WETH",
  8: "YFI"
};

export const OPTION_TYPE_NUMBERS = {
  0: "Invalid",
  1: "Put",
  2: "Call"
};

export const PROTOCOL_NUMBERS = {
  0: "Invalid",
  1: "CharmV02",
  2: "HegicV888",
  3: "SirenV1"
};

export const TABLE_COLUMNS = [
  {
    name: "Premium",
    selector: "premium",
    sortable: true
  },
  {
    name: "Expiration Date",
    selector: "expirationDate",
    sortable: true
  },
  {
    name: "Strike Price",
    selector: "strikePrice",
    sortable: true
  },
  {
    name: "payment asset",
    selector: "paymentAsset",
    sortable: false
  },
  {
    name: "Protocol",
    selector: "protocol",
    sortable: false
  }
];
