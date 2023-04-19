import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/RootLayout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Auth from "./pages/Auth";
import SingleBlog from "./pages/SingleBlog";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsOfService from "./pages/TermsOfService";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "store", element: <Store /> },
      { path: "store/:productId", element: <SingleProduct /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:blogId", element: <SingleBlog /> },
      { path: "compare-products", element: <CompareProducts /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
      { path: "auth", element: <Auth /> },
      { path: "refund", element: <RefundPolicy /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "shipping", element: <ShippingPolicy /> },
      { path: "terms", element: <TermsOfService /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
