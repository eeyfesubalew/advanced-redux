import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-data-ecb0d-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const responseData = await response.json();
      return responseData;
    };

    try {
      const cartData = await fetchData;
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error",
          message: "Sending data has failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending...",
        title: "Sending data...",
        message: "Sending cart data..",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-data-ecb0d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success",
          message: "Sent data successfull",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error",
          message: "Sending data has failed",
        })
      );
    }
  };
};
