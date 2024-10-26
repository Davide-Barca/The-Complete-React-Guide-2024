import { useContext, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/cartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <main>
          <Meals />
          <Cart />
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
