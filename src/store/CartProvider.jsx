import React from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const CartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const UpdatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartIndex];
        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartIndex] = updatedItem;
        } else {
            updatedItem = { ...action.item };
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: UpdatedTotalAmount,
        };
    }
    if (action.type === "REMOVE_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        let updatedItem;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = React.useReducer(
        CartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        return dispatchCartAction({ type: "ADD_ITEM", item: item });
    };

    const remoteItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE_ITEM", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: remoteItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
