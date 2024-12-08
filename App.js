import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Component/Body";
import Header from "./src/Component/Header";
import Footer from "./src/Component/Footer";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
