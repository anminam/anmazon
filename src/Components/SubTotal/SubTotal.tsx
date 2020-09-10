import React from "react";
import "./SubTotal.scss";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { RootState } from "core/Store";

const SubTotal = () => {
  const items = useSelector((state: RootState) => state.data.baskets);
  const handleProcessButtonClick = () => {
    if (items.length === 0) {
      alert("Plz, Have to choose a product");
    } else {
      alert(`Do you wants to buy ${items.length} items?`);
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal ( {items.length} items): <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" id="check_gift" />
              <label htmlFor="check_gift">This order contains a gift</label>
            </small>
          </>
        )}
        decimalScale={2}
        value={items.reduce<number>((pre, curr) => pre + curr.price, 0)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={""}
      />
      <button type="button" onClick={handleProcessButtonClick}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default SubTotal;
