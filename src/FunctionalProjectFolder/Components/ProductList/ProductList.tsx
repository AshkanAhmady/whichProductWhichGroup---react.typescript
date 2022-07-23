import { useState } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";
import UpdateProductForm from "../updateProductForm/UpdateProductForm";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../Redux/Product/productActions";
import { toast } from "react-toastify";
import { GlobalStateInterface, ProductInterface } from "../../../Interfaces";

const ProductList = () => {
  const [edit, setEdit] = useState({
    group: "",
    number: 0,
    title: "",
    id: 0,
  });

  const filterProducts = useSelector((state: GlobalStateInterface) => state.filterProducts);
  const options = useSelector((state: GlobalStateInterface) => state.options);
  const dispatch = useDispatch();

  const editProduct = (product: ProductInterface) => {
    dispatch(updateProduct(product));
    toast.success("محصول مورد نظر با موفقیت به روزرسانی شد");
    setEdit({
      group: "",
      number: 0,
      title: "",
      id: 0,
    });
  };

  const renderProducts = () => {
    if (filterProducts.length === 0)
      return <div className={styles.noProduct}>هنوز محصولی ثبت نشده</div>;
    return (
      <div className={styles.productList}>
        {filterProducts.map((product: ProductInterface) => {
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
