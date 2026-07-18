export const initialCart = [];

export function cartReducer(state, action) {

    switch (action.type) {

        case "ADD": {

            const exist = state.find(
                item => item.id === action.payload.id
            );

            if (exist) {

                return state.map(item => 
                    item.id === action.payload.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
                );
            }

            return [
                ...state,
                {
                    ...action.payload,quantity: 1
                }
            ];
        }

        case "INCREASE":
            return state.map(item =>
                item.id === action.payload
                ?{
                    ...item,
                    quantity: item.quantity + 1
                }
                :item
            );
        
        case "DECREASE":
            return state.map(item =>
                item.id === action.payload
                ?{
                    ...item,
                    quantity: item.quantity - 1
                }
                :item
            )
            .filter(item => item.quantity > 0);
            
        default:
            return state;    
    }
}