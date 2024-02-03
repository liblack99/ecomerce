import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Routes from "../../Routes";
import Navbar from "../../Component/NavBar";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
