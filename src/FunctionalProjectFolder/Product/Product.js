import styles from "./Product.module.css";
import CurrentTime from "../../common/CurrentTime";

const Product = ({ product, onEdit }) => {
  return (
    <div key={product.id} className={styles.singleProduct}>
      <h2>{product.title}</h2>
      <div className={styles.details}>
        <div className={styles.current}>
          <span>
            {CurrentTime(product.created_at)}
            <span> ایجاد شد </span>
          </span>
          {product.updated_at > 0 && (
            <span>
              {CurrentTime(product.updated_at)}
              <span> ویرایش شد </span>
            </span>
          )}
        </div>
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
