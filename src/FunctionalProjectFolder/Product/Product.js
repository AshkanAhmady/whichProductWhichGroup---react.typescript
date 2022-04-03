import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <div key={product.id} className={styles.singleProduct}>
      <h2>{product.title}</h2>
      <div className={styles.details}>
        <p>
          <span className={styles.number}>{product.number}</span>
        </p>
        <p>
          <span className={styles.group}>{product.group}</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
