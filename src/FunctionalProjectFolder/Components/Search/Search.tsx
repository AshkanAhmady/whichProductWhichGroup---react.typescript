import React, { useState } from "react";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../Redux/Product/productActions";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    setSearch(value);
    dispatch(searchProducts(value));
  };

  return (
    <form className={styles.searchForm}>
      <input
        placeholder="جستجو ..."
        onChange={changeHandler}
        type="text"
        value={search}
      />
    </form>
  );
};

export default Search;
