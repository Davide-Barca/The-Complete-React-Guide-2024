import { useContext, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { CartContextProvider } from "./store/cartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <main>
          <Meals />
          <Cart />
          <Checkout />
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
