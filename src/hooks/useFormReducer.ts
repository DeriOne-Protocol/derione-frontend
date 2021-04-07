import { useReducer } from "react";

const today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

export function useFormReducer() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "CHOOSE_ETH": {
          return {
            ...state,
            underlyingAsset: "ETH"
          };
        }
        case "CHOOSE_WBTC": {
          return {
            ...state,
            underlyingAsset: "WBTC"
          };
        }
        case "CHOOSE_CALL": {
          return {
            ...state,
            optionType: "Call"
          };
        }
        case "CHOOSE_PUT": {
          return {
            ...state,
            optionType: "Put"
          };
        }
        case "UPDATE_EXPIRATION_DATE": {
          return {
            ...state,
            expirationDate: action.value
          };
        }
        case "UPDATE_STRIKE_PRICE": {
          return {
            ...state,
            strikePrice: action.value
          };
        }
        case "UPDATE_OPTION_SIZE": {
          return {
            ...state,
            optionSize: action.value
          };
        }
        default: {
          return state;
        }
      }
    },
    {
      underlyingAsset: "ETH",
      optionType: "Call",
      expirationDate: today,
      strikePrice: 0,
      optionSize: 0
    }
  );

  return [state, dispatch];
}
