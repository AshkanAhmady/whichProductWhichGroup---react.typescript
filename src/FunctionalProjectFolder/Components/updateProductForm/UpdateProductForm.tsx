import React, { useEffect, useState } from "react";
import Select from "react-select";
import { UpdateProductFormComponentProps } from "../../../Interfaces";
import styles from "./UpdateProductForm.module.css";

const UpdateProductForm: React.FC<UpdateProductFormComponentProps> = ({ options, edit, editProduct }) => {
  const [product, setProduct] = useState(edit);
  const [selectedOption, setSelectedOption] = useState({value: "همه", label: "همه"});

  useEffect(() => {
    setSelectedOption({ value: product.group, label: product.group })
  }, [product])

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value });
  };

  const groupChangeHandler = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    setProduct({ ...product, group: selectedOption.label });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProduct(product);
  };

  return (
    <form onSubmit={submitHandler} className={styles.updateForm}>
      <input
        required
        onChange={changeHandler}
        type="text"
        name="title"
        value={product.title}
      />
      <input
        required
        onChange={changeHandler}
        type="number"
        name="number"
        value={product.number}
      />
      <Select
        name="select"
        className={styles.select}
        value={selectedOption}
        onChange={groupChangeHandler}
        //همه ی گزینه ها بغیر از همه
        options={options.filter((item) => item.label !== "همه")}
      />
      <button type="submit">ثبت</button>
    </form>
  );
};

export default UpdateProductForm;
