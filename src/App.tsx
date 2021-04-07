import { Connectors } from "./components/Connectors";
import { Feed } from "./components/Feed";
import { Footer } from "./components/Footer";
import { Forms } from "./components/Forms";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Forms />
      <Feed />
      <Connectors />
      <Footer />
    </>
  );
}
