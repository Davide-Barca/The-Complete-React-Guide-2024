import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector } from 'react-redux';

import { cartActions } from './store/cartSlice';

function App() {
  const cartIsVisible = useSelector(state => state.cart.showCart)
  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
