import { Web3ReactProvider } from "@web3-react/core";
import Body from "./components/Body";
import Connectors from "./components/Connectors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { FormContext } from "./contexts/FormContext";
import { useFormReducer } from "./hooks/useFormReducer";
import getWeb3Library from "./utils/providers";

export default function App() {
  const [state, dispatch] = useFormReducer();

  return (
    <>
      <Web3ReactProvider getLibrary={getWeb3Library}>
        <FormContext.Provider value={[state, dispatch]}>
          <Header />
          <Connectors />
          <Body />
          <Footer />
        </FormContext.Provider>
      </Web3ReactProvider>
    </>
  );
}
