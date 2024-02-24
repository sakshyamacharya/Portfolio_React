import React from "react";
import Routing from "./routing/path";
import Navigation from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navigation/>
      <Routing />
      <Footer/>
    </div>
  );
};

export default App;
