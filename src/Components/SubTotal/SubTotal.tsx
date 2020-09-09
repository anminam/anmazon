import React from "react";
import "./SubTotal.scss";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { RootState } from "core/Store";

const SubTotal = () => {
  const items = useSelector((state: RootState) => state.data.baskets);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal ( {items.length} items): <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={items.reduce<number>((pre, curr) => pre + curr.price, 0)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={""}
      />
      <button type="button">Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
