import { useContext } from "react";
import DataTable from "react-data-table-component";
import { FormContext } from "../contexts/FormContext";

export function Body() {
  const [
    { underlyingAsset, optionType, expirationDate, strikePrice, optionSize },
    dispatch
  ] = useContext(FormContext);

  const tableData = [
    {
      id: 1,
      expirationDate: expirationDate,
      strikePrice: strikePriceMin,
      optionSize: optionSize
    }
  ];

  const columns = [
    {
      name: "Strike Price",
      selector: "strikePrice",
      sortable: true
    },
    {
      name: "Expiration Date",
      selector: "expirationDate",
      sortable: true
    },
    {
      name: "Option Size",
      selector: "optionSize",
      sortable: false
    }
  ];

  return (
    <>
      <div>
        <div>
          <label>Underlying Asset</label>
          <input
            type="radio"
            name="underlyingAsset"
            checked={underlyingAsset === "ETH"}
            value="ETH"
            onClick={() => {
              dispatch({ type: "CHOOSE_ETH" });
            }}
          />
          <label>ETH</label>
          <input
            type="radio"
            name="underlyingAsset"
            checked={underlyingAsset === "WBTC"}
            value="WBTC"
            onClick={() => {
              dispatch({ type: "CHOOSE_WBTC" });
            }}
          />
          <label>WBTC</label>
        </div>
        <div>
          <label>Option Type</label>
          <input
            type="radio"
            name="optionType"
            checked={optionType === "Call"}
            value="Call"
            onClick={() => dispatch({ type: "CHOOSE_CALL" })}
          />
          <label>Call</label>
          <input
            type="radio"
            name="optionType"
            checked={optionType === "Put"}
            value="Put"
            onClick={() => dispatch({ type: "CHOOSE_PUT" })}
          />
          <label>Put</label>
        </div>
        <div>
          <label>Expiration Date</label>
          <input
            onChange={(event) =>
              dispatch({
                type: "UPDATE_EXPIRATION_DATE",
                value: event.target.value
              })
            }
            value={expirationDate}
            type="date"
          />
        </div>
        <div>
          <label>Strike Price Min</label>
          <form>
            <input
              onChange={(event) =>
                dispatch({
                  type: "UPDATE_MIN_STRIKE_PRICE",
                  value: event.target.value
                })
              }
              value={strikePriceMin}
              defaultValue={0}
              min={0}
              max={5000}
              type="range"
            />
            <output>{strikePriceMin}</output>
          </form>
        </div>
        <div>
          <label>Strike Price Max</label>
          <form>
            <input
              onChange={(event) =>
                dispatch({
                  type: "UPDATE_MAX_STRIKE_PRICE",
                  value: event.target.value
                })
              }
              value={strikePriceMax}
              defaultValue={1000}
              min={0}
              max={5000}
              type="range"
            />
            <output>{strikePriceMax}</output>
          </form>
        </div>
        <div>
          <label>Option Size</label>
          <input
            onChange={(event) =>
              dispatch({
                type: "UPDATE_OPTION_SIZE",
                value: event.target.value
              })
            }
            value={optionSize}
            type="text"
          />
        </div>
      </div>
      <DataTable columns={columns} data={tableData} responsive={true} />
    </>
  );
}
