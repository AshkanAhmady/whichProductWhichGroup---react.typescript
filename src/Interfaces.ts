export interface ProductInterface {
    id: number;
    title: string;
    number: number;
    group: string;
    created_at?: number;
    updated_at?: number;
}
// ###################
// ###################
// ###################





export interface ProductReducerAction{
    type: string;
    payload: any;
}
// ###################
// ###################
// ###################





export interface GlobalStateInterface {
    products: ProductInterface[];
    filterProducts: ProductInterface[];
    group: string[];
    options: { value: string, label: string }[];
    selectedOption: {
      value: string;
      label: string;
    },
    showForm: boolean;
}
// ###################
// ###################
// ###################





export interface ProductComponentProps {
    product: ProductInterface;
    onEdit: any;
}
// ###################
// ###################
// ###################





export interface UpdateProductFormComponentProps {
    options: {value: string, label: string}[];
    edit: ProductInterface;
    editProduct: (product: ProductInterface) => void;
}
// ###################
// ###################
// ###################





// export interface OptionsInterface {

// }