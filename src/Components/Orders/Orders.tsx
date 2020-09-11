import React, { useEffect, useState } from "react";
import "./Orders.scss";
import { useSelector } from "react-redux";
import { RootState } from "core/Store";
import { IOrder } from "interfaces/IOrder";
import { db as _ } from "firebaseAnmazon";
import { IProduct } from "interfaces/IProduct";
import ProductBasketCard from "Components/ProductBasketCard/ProductBasketCard";

const Orders = () => {
  const user = useSelector((state: RootState) => state.data.user);
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    if (user) {
      _.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((item) => ({
              id: item.id,
              product: item.data() as IProduct[],
            }))
          );
        });
    }
  }, [user]);

  return (
    <div className="orders">
      <div className="orders__header">
        <h1>Your Orders</h1>
      </div>
      <div className="orders__contents">
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="orders__item">
              <div className="orders__item__header">
                <ul>
                  {order.product.map((product) => (
                    <li>
                      <ProductBasketCard {...product} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
