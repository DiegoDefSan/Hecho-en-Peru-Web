import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Regions } from "../pages/Regions";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { Layout } from "./Layout";
import { NewProductPage } from "../pages/NewProductPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/regions", element: <Regions /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/new-product", element: <NewProductPage /> },
      { path: "/catalog/product/:idProduct", element: <ProductDetailsPage /> }
    ]
  }
]);

export default router;