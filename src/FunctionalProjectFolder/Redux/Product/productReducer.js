import { toast } from "react-toastify";
import _ from "lodash";
import {
  ADD_PRODUCT,
  SET_PRODUCTS,
  SET_GROUPS,
  ADD_OPTIONS,
  SET_OPTIONS,
  FILTER,
  UPDATE,
  SEARCH,
  SET_SHOW_FORM,
  SET_SELECTED_OPTION,
} from "./productType";

const initialState = {
  products: [],
  filterProducts: [],
  group: [],
  options: [{ value: "همه", label: "همه" }],
  selectedOption: {
    value: "همه",
    label: "همه",
  },
  showForm: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      let updatedProducts = [
        ...state.products,
        { ...action.payload, id: Date.now(), created_at: new Date().getTime() },
      ];
      // جلوگیری از ثبت شدن مقادیر تکراری
      const updatedGroup = Array.from(
        new Set([...state.group, action.payload.group])
      );
      // notification
      toast.success("محصول شما ثبت شد");

      return { ...state, products: updatedProducts, group: updatedGroup };
    }
    case SET_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case SET_GROUPS: {
      return { ...state, group: action.payload };
    }
    case ADD_OPTIONS: {
      // اگر دسته بندی انتخاب شده در هنگام ثبت محصول جزو دسته بندی های قبلی بود، آنرا به لیست دسته بندی ها اضافه نکن
      // if(newProduct.group === savedGroup) => dont add this group to group list
      let sameValue = state.group.find((item) => item == action.payload.group);
      if (!sameValue) {
        let updatedUptions = [
          ...state.options,
          { value: action.payload.group, label: action.payload.group },
        ];
        return { ...state, options: updatedUptions };
      }
      return state;
    }
    case SET_OPTIONS: {
      return { ...state, options: action.payload };
    }
    case SET_SELECTED_OPTION: {
      return { ...state, selectedOption: action.payload };
    }
    case FILTER: {
      if (action.payload.value === "همه") {
        return { ...state, filterProducts: state.products };
      } else {
        let updatedProducts = state.products.filter(
          (product) => product.group === action.payload.value
        );
        return { ...state, filterProducts: updatedProducts };
      }
    }
    case UPDATE: {
      action.payload.updated_at = new Date().getTime();
      let cloneProducts = [...state.products];
      const index = cloneProducts.findIndex((item) => {
        return item.id === action.payload.id;
      });
      cloneProducts[index] = action.payload;
      cloneProducts = _.orderBy(cloneProducts, ["updated_at"], ["desc"]);
      toast.success("محصول مورد نظر با موفقیت به روزرسانی شد");
      return { ...state, products: cloneProducts };
    }
    case SEARCH: {
      // filter products befor search
      let updatedProducts;
      if (state.selectedOption.value === "همه") {
        updatedProducts = state.products;
      } else {
        updatedProducts = state.products.filter(
          (product) => product.group === state.selectedOption.value
        );
      }

      // search product after filter
      let searched = updatedProducts.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, filterProducts: searched };
    }
    case SET_SHOW_FORM: {
      return { ...state, showForm: !state.showForm };
    }
    default:
      return state;
  }
};

export default productReducer;
