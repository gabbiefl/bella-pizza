import { createBrowserRouter, Outlet } from "react-router";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import Orders from "./pages/Orders";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet /> {/* onde os elementos filhos serão renderizados */}
    </div>
  );
};

export const router = createBrowserRouter([
  // elementos que receberão o layout com o header
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },

  //  elementos sem o layout com o header
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
