import Nav from "./Nav/Nav";
import AddProductForm from "./AddProductForm/AddProductForm";
import ProductList from "./ProductList/ProductList";
import styles from "./ProductApp.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

let options = [{ value: "همه", label: "همه" }];

const ProductApp = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProduct] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [group, setGroup] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: "همه",
    label: "همه",
  });

  useEffect(() => {
    // localStorage.clear();
    // use stored datas on reload
    var storedProducts = JSON.parse(localStorage.getItem("products"));
    var storedGroup = JSON.parse(localStorage.getItem("group"));
    var storedOptions = JSON.parse(localStorage.getItem("options"));
    setProduct(storedProducts);
    setGroup(storedGroup);
    options = [...storedOptions];
  }, []);

  useEffect(() => {
    // store datas
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("group", JSON.stringify(group));
    localStorage.setItem("options", JSON.stringify(options));

    filterHandler(selectedOption);
  }, [products, group]);

  const setProductHandler = (product) => {
    setProduct([...products, { ...product, id: Date.now() }]);

    // جلوگیری از ثبت شدن مقادیر تکراری
    const cloneGroup = Array.from(new Set([...group, product.group]));
    setGroup(cloneGroup);

    optionsHandler(product);
    // notification
    toast.success("محصول شما ثبت شد");
  };

  const optionsHandler = (product) => {
    // اگر دسته بندی انتخاب شده در هنگام ثبت محصول جزو دسته بندی های قبلی بود، آنرا به لیست دسته بندی ها اضافه نکن
    // if(newProduct.group === savedGroup) => dont add this group to group list
    let sameValue = group.find((item) => item == product.group);
    if (!sameValue) {
      options = [...options, { value: product.group, label: product.group }];
    }
  };

  const filterHandler = (selectedOption) => {
    if (selectedOption.value === "همه") {
      setFilterProducts(products);
    } else {
      const updatedProducts = products.filter(
        (product) => product.group === selectedOption.value
      );
      setFilterProducts(updatedProducts);
    }
  };

  return (
    <section className={styles.productApp}>
      <Nav
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        filterHandler={filterHandler}
        options={options}
        group={group}
        products={products}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      {showForm && (
        <AddProductForm
          group={group}
          setProductHandler={setProductHandler}
          setShowForm={setShowForm}
        />
      )}
      <ProductList filterProducts={filterProducts} />
    </section>
  );
};

export default ProductApp;
