import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import { Provider } from "react-redux";
import EcomStore from "./store/index.js";
import HomePage from "./components/routes/HomePage.jsx";
import Cart from "./components/routes/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={EcomStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
