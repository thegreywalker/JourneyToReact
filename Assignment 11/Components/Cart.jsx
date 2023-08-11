import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import "../restrauntmenu.css";
import RestrauntMenuCard, { withoutButtonCard } from "./RestrauntMenuCard";
import { clearCart } from "./utils/slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems);
    const RestrauntMenuCardWithoutButton = withoutButtonCard(RestrauntMenuCard); // Higher Order Component

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart-menu">
            {cartItems.length === 0 ? (
                <p style={{textAlign: 'center', marginTop: '100px', fontWeight: 'bold', fontSize: '30px'}}>Add Some Items to your Cart!!</p>
            ) : (
                <button onClick={handleClearCart}>Clear Cart</button>
            )}

            {cartItems.map((card) => (
                <RestrauntMenuCardWithoutButton
                    key={nanoid()}
                    imageId={card?.imageId}
                    name={card?.name}
                    price={card?.price}
                    description={card?.description}
                />
            ))}
        </div>
    );
};

export default Cart;
