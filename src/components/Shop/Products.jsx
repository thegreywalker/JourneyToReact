import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 76,
    title: "Test",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 74,
    title: "My Boook",
    description: "Do read this Best Seller of the Year",
  },
  {
    id: "p3",
    price: 70,
    title: "The Lost Spring",
    description: "The Fallen Empire of Peace",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
