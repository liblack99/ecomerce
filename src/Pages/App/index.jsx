import { HashRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Navbar from "../../Component/NavBar";
import AppRoutes from "../../Routes";

function App() {
  return (
    <ShoppingCartProvider>
      <HashRouter>
        <Navbar />
        <AppRoutes />
      </HashRouter>
    </ShoppingCartProvider>
  );
}

export default App;
