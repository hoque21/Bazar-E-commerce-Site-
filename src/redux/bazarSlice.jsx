import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../Assets/Api';

const initialState = {
    productData: [],
    userInfo: null,
};

export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item) {
                // If item already exists in cart, update its quantity
                item.quantity += action.payload.quantity;
            } else {
                // If item is not in cart, add it to cart
                state.productData.push(action.payload);
            }
        },
        deleteItem: (state, action) => {
            // Filter out the item with the given _id
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state, action) => {
            state.productData = [];
        },
        incrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload
            );
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    }
});

export const { addtocart, deleteItem, resetCart, incrementQuantity, decrementQuantity } = bazarSlice.actions;
export default bazarSlice.reducer;
