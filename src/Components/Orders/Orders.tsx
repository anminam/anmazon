import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "core/Store";
import { IOrder, IOrderProduct } from "interfaces/IOrder";
import { db as _ } from "firebaseAnmazon";
import ProductBasketCard from "Components/ProductBasketCard/ProductBasketCard";
import { Utils } from "core/Utils";

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
              product: item.data() as IOrderProduct,
            }))
          );
        });
    }
  }, [user]);

  return (
    <div className="orders">
      <div className="orders__container">
        <div className="orders__header">
          <h1>Your Orders</h1>
        </div>
        <div className="orders__contents">
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="orders__item">
                <div className="orders__item__info">
                  <div className="orders__item__info__date">
                    {Utils.formatDate(order.product.created)}
                  </div>
                  <div className="orders__item__info__total">
                    Total : $ {Utils.formatPrice(order.product.amount)}
                  </div>
                </div>
                <div className="orders__item__contents">
                  <ul>
                    {order.product.products.map((product) => (
                      <li key={product.id}>
                        <ProductBasketCard {...product} />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="orders__footer">
          <p>
            You have not placed any orders in past 6 months. View orders in 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
