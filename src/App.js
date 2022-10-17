import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./Orders/Orders";
import Inventory from "./Inventory/Inventory";
import About from "./About/About";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: productsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "about",
          element: <About></About>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
