import styles from "./Product.module.css";

const Product = ({ product, onEdit }) => {
  return (
    <div key={product.id} className={styles.singleProduct}>
      <h2>{product.title}</h2>
      <div className={styles.details}>
        <div>
          <button className={styles.edit} onClick={onEdit}>
            ویرایش
          </button>
          <p>
            <span className={styles.number}>{product.number}</span>
          </p>
        </div>
        <p>
          <span className={styles.group}>{product.group}</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
