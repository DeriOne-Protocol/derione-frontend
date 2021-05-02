import { useReducer } from "react";

const currentTimestamp = Date.now();
const dayInMilliseconds = 60 * 60 * 24 * 1000;
const inFourWeeks = new Date(currentTimestamp + dayInMilliseconds * 28).toJSON().slice(0, 10);

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
        case "UPDATE_MIN_STRIKE_PRICE": {
          return {
            ...state,
            strikePriceMin: action.value
          };
        }
        case "UPDATE_MAX_STRIKE_PRICE": {
          return {
            ...state,
            strikePriceMax: action.value
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
      expirationDate: inFourWeeks,
      strikePriceMin: 0,
      strikePriceMax: 2000,
      optionSize: 1
    }
  );

  return [state, dispatch];
}
