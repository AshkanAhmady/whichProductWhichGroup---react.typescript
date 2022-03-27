import styles from "./ProductList.module.css";

const ProductList = ({ filterProducts }) => {
  if (filterProducts.length === 0)
    return <div className={styles.noProduct}>هنوز محصولی ثبت نشده</div>;
  return (
    <div className={styles.productList}>
      {filterProducts.map((product) => {
        return (
          <div key={product.id} className={styles.singleProduct}>
            <h2>{product.title}</h2>
            <div className={styles.details}>
              <p>
                تعداد: <span className={styles.number}>{product.number}</span>
              </p>
              <p>
                دسته بندی:
                <span className={styles.number}>{product.group}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
