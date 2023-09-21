import "./App.css";
// import DaisyNav from "./assets/Components/DaisyNav/DaisyNav";
import NavBar from "./assets/Components/NavBar/NavBar";
import PriceOptions from "./assets/Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}

      <NavBar></NavBar>

      {/* <h1 className="text-5xl bg-rose-400 text-center">Vite + React</h1> */}

      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
