import { IProduct } from "./IProduct";

export interface IOrderProduct {
  products: IProduct[];
  amount: number;
  created: number;
}
export interface IOrder {
  id: string;
  product: IOrderProduct;
}
