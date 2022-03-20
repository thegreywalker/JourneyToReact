import React from "react";

const OrderList = () => {
  const [orders, setOrders] = React.useState([]);
  let cookie = document.cookie;
  let data = cookie.split(";");
  let userId = "";
  let token = "";
  data.forEach((val) => {
    if (val.includes("user_id")) {
      userId = val.split("=")[1];
    }
    if (val.includes("token")) {
      token = val.split("=")[1];
    }
  });

  const fetchOrdersHandler = React.useCallback(async () => {
    const response = await fetch("http://localhost:8000/orders/list/", {
      method: "GET",
      headers: {
        Authorization: "Token " + token,
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    let loadedOrders = [];
    for (const key in data) {
      loadedOrders.push({
        prod_name: data[key].product.name,
        image: data[key].product.image,
        ord_id: data[key].ord_id,
        email: data[key].customer.email,
        customer_id: data[key].customer.id,
        order_price: data[key].ord_price,
        order_quantity: data[key].ord_quantity,
        product: data[key].product,
      });
    }
    setOrders(loadedOrders);
    console.log(loadedOrders);
  }, []);

  React.useEffect(() => {
    fetchOrdersHandler();
  }, [fetchOrdersHandler]);

  return (
    <React.Fragment>
      <section>
        {orders.map((order) => {
          return (
            <div
              className="bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 rounded-lg p-4 space-x-5 space-y-2 drop-shadow-2xl m-4 "
              key={order.ord_id}
            >
              <div className="bg-gradient-to-r from-indigo-500 text-cente text-white text-xl via-purple-500 p-2 rounded-md drop-shadow-2xl">
                <p>Customer ID ~ {order.customer_id}</p>
              </div>
              <img
                className="w-40 h-40  rounded-md"
                src={order.image}
                alt={order.prod_name}
              />

              <div className="text-white font-bold italic ">
                <p>Email ~ {order.email}</p>
                <p>Order Price ~ {order.order_price}</p>
                <p>Order Quantity ~ {order.order_quantity}</p>
                <p>Product ~ {order.prod_name}</p>
              </div>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default OrderList;
