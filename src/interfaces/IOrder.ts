import { IProduct } from "./IProduct";

export interface IOrder {
  id: string;
  product: IProduct[];
}
