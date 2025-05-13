import { useState } from "react";
import "./App.scss";
import GlobalContextProvider from "./Components/GlobalContextProvider";
import Hero from "./Components/Hero/Hero";
import CreatePizza from "./Components/CreatePizza/CreatePizza";
import Nav from "./Components/Nav/Nav";
// import Location from "./Components/Location/Location";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <>
      <Hero />
      <GlobalContextProvider>
        <Nav setCartVisible={setCartVisible} cartVisible={cartVisible} />
        <CreatePizza cartVisible={cartVisible} />
        {/* <Location /> */}
      </GlobalContextProvider>
    </>
  );
};

export default App;
