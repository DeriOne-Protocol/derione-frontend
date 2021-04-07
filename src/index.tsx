import { ethers } from "ethers";
import React from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import App from "./App";
import { FormProvider } from "./contexts/FormContext";

function getLibrary(provider: any): ethers.providers.Web3Provider {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <FormProvider>
        <App />
      </FormProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
