import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProductSection from "./components/ProductSection/ProductSection";
import Ratings from "./components/Ratings/Ratings";
import TabSection from "./components/TabSection/TabSection";
import CartSection from "./components/CartSection/CartSection";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import { Toaster } from "react-hot-toast";
import GetStarted from "./components/GetStarted/GetStarted";
import PricingSection from "./components/PricingSection/PricingSection";
import ReadySection from "./components/ReadySection/ReadySection";
import FooterSection from "./components/FooterSection/FooterSection";

const getProductAPI = async () => {
  const res = await fetch("./data/ProductData.json");
  return res.json();
};
const productPromise = getProductAPI();
function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
      <Navbar cartProducts={cartProducts} />
      <Hero />
      <Ratings />
      <TabSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartProducts={cartProducts}
      />
      {activeTab === "product" && (
        <ProductSection
          productPromise={productPromise}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      )}
      {activeTab === "cart" &&
        (cartProducts.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartSection
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        ))}
      <GetStarted />
      <PricingSection />
      <ReadySection />
      <FooterSection />
    </>
  );
}

export default App;
