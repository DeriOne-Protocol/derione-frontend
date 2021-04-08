import { ethers } from "ethers";
import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Spinner } from "./Spinner";
import {
  ConnectorNames,
  connectorsByName,
  getErrorMessage
} from "../utils/connectors";
import { useEagerConnect } from "../hooks/useEagerConnect";
import { useInactiveListener } from "../hooks/useInactiveListener";

export function Connectors() {
  const context = useWeb3React<ethers.providers.Web3Provider>();
  const { connector, chainId, activate, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <>
      <hr />
      <div>
        {Object.keys(connectorsByName).map((name) => {
          const currentConnector = connectorsByName[name];
          const activating = currentConnector === activatingConnector;
          const connected = currentConnector === connector;
          const disabled =
            !triedEager || !!activatingConnector || connected || !!error;

          return (
            <SwitchButton
              disabled={disabled}
              key={name}
              onClick={() => {
                setActivatingConnector(currentConnector);
                activate(connectorsByName[name]);
              }}
            >
              <div>
                {activating && <Spinner color={"black"} />}
                {connected && (
                  <span role="img" aria-label="check">
                    ✅
                  </span>
                )}
              </div>
              {name}
            </SwitchButton>
          );
        })}
      </div>
      <div>
        {(active || error) && (
          <Button
            onClick={() => {
              deactivate();
            }}
          >
            Disconnect
          </Button>
        )}

        {!!error && <h4>{getErrorMessage(error)}</h4>}
        {chainId === 31337 ? (
          <h4>you are connected to the local network</h4>
        ) : (
          <p></p>
        )}
      </div>

      <hr />

      <div>
        {connector === connectorsByName[ConnectorNames.WalletConnect] && (
          <Button
            onClick={() => {
              (connector as any).close();
            }}
          >
            Kill WalletConnect Session
          </Button>
        )}
      </div>
    </>
  );
}

const Button = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 4px 8px;
`;

const SwitchButton = styled.button`
  background: transparent;
  border-radius: 8px;
  padding: 4px 8px;
    borderColor: {
      ${(props) =>
        props.activating ? "orange" : props.connected ? "green" : "unset"};
    cursor: ${(props) => (props.disabled ? "unset" : "pointer")}
  `;