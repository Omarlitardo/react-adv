// import { ReactElement } from "react";

import { useState } from "react";

export const useProduct = () => {
  const { counter, setCounter } = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return {
    counter,
    increaseBy,
  };
};

// export interface ProductCardProps {
//   product: Product;
//   children?: ReactElement | ReactElement[];
// }

// export interface Product {
//   id: string;
//   title: string;
//   img?: string;
// }

// export interface ProductContextProps {
//   counter: number;
//   increaseBy: (value: number) => void;
//   product: Product;
// }

// export interface ProductCardHOCProps {
//   ({ children, product }: ProductCardProps): JSX.Element;
//   Title: ({ title }: { title?: string }) => JSX.Element;
//   Image: ({ img }: { img?: string }) => JSX.Element;
//   Buttons: () => JSX.Element;
// }
