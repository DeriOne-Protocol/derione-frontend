import { Web3ReactProvider } from "@web3-react/core";
import { Connectors } from "./components/Connectors";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { FormContext } from "./contexts/FormContext";
import { useFormReducer } from "./hooks/useFormReducer";
import { getLibrary } from "./utils/providers";

export default function App() {
  const [state, dispatch] = useFormReducer();

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <FormContext.Provider value={[state, dispatch]}>
          <Connectors />
          <Header />
          <Body />
          <Footer />
        </FormContext.Provider>
      </Web3ReactProvider>
    </>
  );
}
