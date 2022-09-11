import React from "react";
import "./App.css";
import ProductList from "./components/PorductList";
function App() {
  return (
    <>
      <h1 className="font-bold text-2xl text-center p-5 bg-gray-100 text-gray-900 uppercase">
        Learn React TypeScript
      </h1>

      <div className="mt-5">
        <ProductList
          pName="Apple MacBook Pro 17"
          id="1"
          color="White"
          category="Laptop"
          price={2999}
        />
      </div>
    </>
  );
}

export default App;
