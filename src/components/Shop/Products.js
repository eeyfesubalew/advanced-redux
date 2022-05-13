import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 62,
    title: "my first book",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 52,
    title: "my Second book",
    description: "This is a second product - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products) => (
          <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        ))}
        {console.log(DUMMY_PRODUCTS)}
      </ul>
    </section>
  );
};

export default Products;
