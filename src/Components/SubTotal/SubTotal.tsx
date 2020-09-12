import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { RootState } from "core/Store";
import { useHistory } from "react-router-dom";

const SubTotal = () => {
  const history = useHistory();

  const user = useSelector((state: RootState) => state.data.user);
  const basket = useSelector((state: RootState) => state.data.basket);

  const handleProcessButtonClick = () => {
    if (basket.length === 0) {
      alert("Plz, Have to choose a product");
      return;
    } else if (!user) {
      alert("Plz, Login");
      return;
    } else {
      history.push("/payment");
      // alert(`Do you wants to buy ${items.length} items?`);
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal ( {basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" id="check_gift" />
              <label htmlFor="check_gift">This order contains a gift</label>
            </small>
          </>
        )}
        decimalScale={2}
        value={basket.reduce<number>((pre, curr) => pre + curr.price, 0)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        type="button"
        className="orange-button"
        onClick={handleProcessButtonClick}
        disabled={basket.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default SubTotal;
