export const deriOneV1AddressDev = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d";
export const deriOneV1AbiDev = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_charmV02OptionFactoryAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_ETHOptionAddressHegicV888",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WBTCOptionAddressHegicV888",
        type: "address"
      },
      {
        internalType: "address",
        name: "_ETHPoolAddressHegicV888",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WBTCPoolAddressHegicV888",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_strikesRange",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "WBTC_TOKEN",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "expiriesSecondsFromNowStandard",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum DataTypes.Asset",
        name: "_underlyingAsset",
        type: "uint8"
      },
      {
        internalType: "enum DataTypes.OptionType",
        name: "_optionType",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "_expiryTimestamp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_strikeUSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_sizeWEI",
        type: "uint256"
      }
    ],
    name: "getBestOptionFromExactValues",
    outputs: [
      {
        components: [
          {
            internalType: "enum DataTypes.Protocol",
            name: "protocol",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.Asset",
            name: "underlyingAsset",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.Asset",
            name: "paymentAsset",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.OptionType",
            name: "optionType",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "strikeUSD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.Option",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum DataTypes.Asset",
        name: "_underlyingAsset",
        type: "uint8"
      },
      {
        internalType: "enum DataTypes.OptionType",
        name: "_optionType",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "_expiryTimestamp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minStrikeUSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxStrikeUSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_sizeWEI",
        type: "uint256"
      }
    ],
    name: "getBestOptionFromRangeValues",
    outputs: [
      {
        components: [
          {
            internalType: "enum DataTypes.Protocol",
            name: "protocol",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.Asset",
            name: "underlyingAsset",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.Asset",
            name: "paymentAsset",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.OptionType",
            name: "optionType",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "strikeUSD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.Option",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum DataTypes.Asset",
        name: "_underlyingAsset",
        type: "uint8"
      },
      {
        internalType: "enum DataTypes.OptionType",
        name: "_optionType",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "_expiryTimestamp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_strikeUSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256"
      }
    ],
    name: "getOptionListFromExactValues",
    outputs: [
      {
        components: [
          {
            internalType: "enum DataTypes.Protocol",
            name: "protocol",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.Asset",
            name: "underlyingAsset",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.Asset",
            name: "paymentAsset",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.OptionType",
            name: "optionType",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "strikeUSD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.Option[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum DataTypes.Asset",
        name: "_underlyingAsset",
        type: "uint8"
      },
      {
        internalType: "enum DataTypes.OptionType",
        name: "_optionType",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "_expiryTimestamp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minStrikeUSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxStrikeUSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256"
      }
    ],
    name: "getOptionListFromRangeValues",
    outputs: [
      {
        components: [
          {
            internalType: "enum DataTypes.Protocol",
            name: "protocol",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.Asset",
            name: "underlyingAsset",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.Asset",
            name: "paymentAsset",
            type: "uint8"
          },
          {
            internalType: "enum DataTypes.OptionType",
            name: "optionType",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "strikeUSD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.Option[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ETHOptionAddressHegicV888",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WBTCOptionAddressHegicV888",
        type: "address"
      }
    ],
    name: "instantiateOptionContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_optionFactoryAddressCharmV02",
        type: "address"
      }
    ],
    name: "instantiateOptionFactoryCharmV02",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ETHPoolAddressHegicV888",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WBTCPoolAddressHegicV888",
        type: "address"
      }
    ],
    name: "instantiatePoolContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "strikesStandard",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_strikesRange",
        type: "uint256"
      }
    ],
    name: "updateStrikesStandard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
