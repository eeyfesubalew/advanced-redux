import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./components/store/cart-actions";
let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  console.log(cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));

    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "Pending...",
    //       title: "Sending data...",
    //       message: "Sending cart data..",
    //     })
    // );
    // const response = await fetch(
    //   "https://react-data-ecb0d-default-rtdb.firebaseio.com/cart.json",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error("Sending data failed");
    // }

    // dispatch(
    //   uiActions.showNotification({
    //     status: "Success",
    //     title: "Success",
    //     message: "Sent data successfull",
    //   })
    // );
    // };

    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    // sendCartData().catch((error) => {
    //   uiActions.showNotification({
    //     status: "Error",
    //     title: "Error",
    //     message: "Sending data has failed",
    //   });
    // });
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
