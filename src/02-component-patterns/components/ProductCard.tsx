import styles from "../styles/styles.module.css";
// import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";

//import { createContext } from "react";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

// import { ProductTitle } from "./ProductTitle";
// import { ProductImage } from "./ProductImage";
// import { ProductButtons } from "./ProductButtons";

//!exportadas todas a interfaces,tsx
// interface Props {
//   product: Product;
//   children?: ReactElement | ReactElement[];
// }

// interface Product {
//   id: string;
//   title: string;
//   img?: string;
// }
// interface ProductContextProps {
//   counter: number;
//   increaseBy: (value: number) => void;
//   product: Product;
// }

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

//!exportado a ProductImage.tsx

// export const productImage = ({ img = "" }) => {
//   const { product } = useContext(ProductContext);

//   let imgToShow: string;

//   if (img) {
//     imgToShow = img;
//   } else if (product.img) {
//     imgToShow = product.img;
//   } else {
//     imgToShow = noImage;
//   }

//   return (
//     <img
//       className={styles.productImg}
//       src={img ? img : noImage}
//       alt="Product image"
//     />
//   );
// };

////! exportado a ProductTitle.tsx
// export const ProductTitle = ({ title }: { title?: string }) => {
//   const { product } = useContext(ProductContext);

//   return (
//     <span className={styles.productDescription}>
//       {title ? title : product.title}
//     </span>
//   );
// };

interface ProductButtons {
  increaseBy: (value: number) => void;
  counter: number;
}

//! exportado a ProcuctButton.tsx
// export const ProductButtons = () => {
//   const { increaseBy, counter } = useContext(ProductContext);

//   return (
//     <div className={styles.buttonsContainer}>
//       <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
//         -
//       </button>
//       <div className={styles.countLabel}> {counter} </div>
//       <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
//         +
//       </button>
//     </div>
//   );
// };

//!
// export const ProductContext = createContext({} as ProductContextProps);
// const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}

        {/* <ProductImage img={product.img} />
      {/* <img className={styles.productImg} src={noImage} alt="Coffee Mug" /> */}
        {/* <ProductTitle title={product.title} /> */}
        {/* <ProductButtons increaseBy={increaseBy} counter={counter} />  */}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Button = ProductButtons;
