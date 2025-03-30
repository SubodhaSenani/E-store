import { createStore } from 'redux';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    cart: CartItem[];
}

type CartAction = 
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: { id: number } }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

const initialState: CartState = {
    cart: []
};

const cartReducer = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1 }]
            };
        }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };

        default:
            return state;
    }
};

export const store = createStore(cartReducer);
export default store;