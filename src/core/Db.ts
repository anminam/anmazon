import { db as _ } from "firebaseAnmazon";
import { PaymentIntent } from "@stripe/stripe-js";
import { IProduct } from "interfaces/IProduct";

const db = {
  setBasket: (
    user: firebase.User,
    paymentIntent: PaymentIntent,
    basket: IProduct[]
  ) => {
    _.collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(paymentIntent.id)
      .set({
        products: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
  },
};

export { db };
