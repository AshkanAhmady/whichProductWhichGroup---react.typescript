import styles from "./Nav.module.css";
import Select from "react-select";

const Nav = ({
  setShowForm,
  showForm,
  products,
  options,
  filterHandler,
  selectedOption,
  setSelectedOption,
}) => {
  const changeHandler = (selectedOption) => {
    setSelectedOption(selectedOption);
    filterHandler(selectedOption);
  };

  return (
    <header className={styles.header}>
      <div>
        <h1>انبار محصولات</h1>
        <button
          onClick={() => setShowForm((prevState) => !prevState)}
          className={`${styles.btn} ${showForm === true ? styles.cancel : ""}`}
        >
          {showForm === true ? "انصراف" : "محصول جدید"}
        </button>
      </div>
      {products.length > 0 && (
        <div>
          <div>
            <span> تعداد محصولات: </span>
            <span>{products.length}</span>
          </div>
          <div>
            <span> دسته بندی ها: </span>
            <Select
              className={styles.select}
              value={selectedOption}
              onChange={changeHandler}
              options={options}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
