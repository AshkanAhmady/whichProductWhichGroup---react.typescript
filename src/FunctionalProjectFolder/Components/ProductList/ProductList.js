import { useState } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";
import UpdateProductForm from "../updateProductForm/UpdateProductForm";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../Redux/Product/productActions";

const ProductList = () => {
  const [edit, setEdit] = useState({
    group: "",
    number: null,
    title: "",
    id: null,
  });

  const filterProducts = useSelector((state) => state.filterProducts);
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  const editProduct = (product) => {
    dispatch(updateProduct(product));
    setEdit({
      group: "",
      number: null,
      title: "",
      id: null,
    });
  };

  const renderProducts = () => {
    if (filterProducts.length === 0)
      return <div className={styles.noProduct}>هنوز محصولی ثبت نشده</div>;
    return (
      <div className={styles.productList}>
        {filterProducts.map((product) => {
          return (
            <Product
              key={product.id}
              onEdit={() => setEdit(product)}
              product={product}
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      {edit.id ? (
        <UpdateProductForm
          editProduct={editProduct}
          edit={edit}
          options={options}
        />
      ) : (
        renderProducts()
      )}
    </>
  );
};

export default ProductList;
