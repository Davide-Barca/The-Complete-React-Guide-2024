import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Book 1",
    description: "My first book",
    price: 10,
  },
  {
    id: "p2",
    title: "Book 2",
    description: "My second book",
    price: 4,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id} productDetails={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
