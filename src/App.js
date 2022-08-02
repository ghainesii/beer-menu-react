import "./App.css";
import { Header } from "./components/Header";
import { OnTap } from "./components/OnTap";
import { Checkins } from "./components/Checkins";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <OnTap />
      <Checkins />
      <Footer />
    </>
  );
}

export default App;
