import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider } from "@ethersproject/providers";
import { useContext, useState } from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import DataTable from "react-data-table-component";
import { FormContext } from "../contexts/FormContext";
import {
  ASSET_NAMES,
  OPTION_TYPE_NAMES,
  TABLE_COLUMNS
} from "../constants/constants";
import { getDeriOneV1ContractInstance } from "../utils/contracts";
import { convertOptionList } from "../utils/convertors";

export default function Body() {
  const { chainId, library } = useWeb3React<Web3Provider>();
  const [tableData, setTableData] = useState([]);

  let [
    {
      underlyingAsset,
      optionType,
      expirationDate,
      strikePriceMin,
      strikePriceMax,
      optionSize
    },
    dispatch
  ] = useContext(FormContext);

  const expirationDateArray = expirationDate.split("-");
  const expirationDateTimestamp =
    new Date(
      expirationDateArray[0],
      expirationDateArray[1] - 1,
      expirationDateArray[2]
    ).getTime() / 1000;

  let deriOneV1Contract;

  async function callGetOptionListFromRangeValues() {
    deriOneV1Contract = getDeriOneV1ContractInstance(library, chainId);

    const optionList = await deriOneV1Contract.getOptionListFromRangeValues(
      BigNumber.from(ASSET_NAMES[underlyingAsset]),
      BigNumber.from(OPTION_TYPE_NAMES[optionType]),
      BigNumber.from(expirationDateTimestamp),
      BigNumber.from(strikePriceMin).mul(BigNumber.from(10).pow(8)),
      BigNumber.from(strikePriceMax).mul(BigNumber.from(10).pow(8)),
      BigNumber.from(optionSize).mul(BigNumber.from(10).pow(18))
    );
    return convertOptionList(optionList);
  }

  async function updateFeed() {
    let options = [];
    if (library !== undefined) {
      try {
        options = await callGetOptionListFromRangeValues();
        console.log("options 1==>", options);
        for (let i = 0; i < options.length; i++) {
          options[i] = {
            id: i,
            premium: options[i].premium,
            expirationDate: options[i].expiryTimestamp,
            strikePrice: options[i].strikeUSD,
            paymentAsset: options[i].paymentAsset,
            protocol: options[i].protocol
          };
        }
        setTableData(options);
        console.log("options 2==>", options);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <BodyWrapper>
      <div>
        <InputWrapper>
          <Label>Underlying Asset</Label>
          <input
            type="radio"
            name="underlyingAsset"
            checked={underlyingAsset === "ETH"}
            value="ETH"
            onClick={async () => {
              dispatch({ type: "CHOOSE_ETH" });
              await updateFeed();
            }}
          />
          <Label>ETH</Label>
          <input
            type="radio"
            name="underlyingAsset"
            checked={underlyingAsset === "WBTC"}
            value="WBTC"
            onClick={async () => {
              dispatch({ type: "CHOOSE_WBTC" });
              await updateFeed();
            }}
          />
          <Label>WBTC</Label>
        </InputWrapper>
        <InputWrapper>
          <Label>Option Type</Label>
          <input
            type="radio"
            name="optionType"
            checked={optionType === "Call"}
            value="Call"
            onClick={async () => {
              dispatch({ type: "CHOOSE_CALL" });
              await updateFeed();
            }}
          />
          <Label>Call</Label>
          <input
            type="radio"
            name="optionType"
            checked={optionType === "Put"}
            value="Put"
            onClick={async () => {
              dispatch({ type: "CHOOSE_PUT" });
              await updateFeed();
            }}
          />
          <Label>Put</Label>
        </InputWrapper>
        <InputWrapper>
          <Label>Expiration Date</Label>
          <input
            onChange={async (event) => {
              dispatch({
                type: "UPDATE_EXPIRATION_DATE",
                value: event.target.value
              });
              await updateFeed();
            }}
            value={expirationDate}
            type="date"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Strike Price Min</Label>
          <input
            onChange={async (event) => {
              dispatch({
                type: "UPDATE_MIN_STRIKE_PRICE",
                value: event.target.value
              });
              await updateFeed();
            }}
            value={strikePriceMin}
            defaultValue={0}
            min={0}
            max={5000}
            type="range"
          />
          <output>{strikePriceMin}</output>
        </InputWrapper>
        <InputWrapper>
          <Label>Strike Price Max</Label>
          <input
            onChange={async (event) => {
              dispatch({
                type: "UPDATE_MAX_STRIKE_PRICE",
                value: event.target.value
              });
              await updateFeed();
            }}
            value={strikePriceMax}
            min={0}
            max={5000}
            type="range"
          />
          <output>{strikePriceMax}</output>
        </InputWrapper>
        <InputWrapper>
          <Label>Option Size</Label>
          <input
            onChange={async (event) => {
              dispatch({
                type: "UPDATE_OPTION_SIZE",
                value: event.target.value
              });
              await updateFeed();
            }}
            value={optionSize}
            type="text"
          />
        </InputWrapper>
      </div>
      <DataTable
        columns={TABLE_COLUMNS}
        data={tableData}
        noDataComponent="Whooops! No matched options...!"
        responsive={true}
      />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.section`
  width: 80%;
  margin: auto;
`;

const InputWrapper = styled.section`
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

