import Product from "../Product/Product";
import styles from "./ProductList.module.css";

const ProductList = ({ filterProducts }) => {
  if (filterProducts.length === 0)
    return <div className={styles.noProduct}>هنوز محصولی ثبت نشده</div>;
  return (
    <div className={styles.productList}>
      {filterProducts.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default ProductList;
