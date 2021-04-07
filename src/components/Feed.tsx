import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export function Feed() {
  const [form] = useContext(FormContext);
  const {
    underlyingAsset,
    optionType,
    expirationDate,
    strikePrice,
    optionSize
  } = form;

  return (
    <div>
      <p>underlyingAsset: {underlyingAsset}</p>
      <p>optionType: {optionType}</p>
      <p>expirationDate: {expirationDate}</p>
      <p>strikePrice: {strikePrice}</p>
      <p>optionSize: {optionSize}</p>
    </div>
  );
}

// this component is not rerendered when a state changes. it looks like this component is not aware of it,
