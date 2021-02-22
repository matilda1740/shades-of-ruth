// Store initial cart state

export const initialState = {
    cart: [],
    wishlist: [],
    user: null,
};

export const getSubTotal = (cart) =>
  cart?.reduce((amount, item) => amount+=parseInt(item.price), 0);

export const reducer = (previousState = initialState, action) => {
    switch (action.type) {
        case "add_to_cart":
            console.log("Added to state/Cart - ", action.item.name);
            return {
                ...previousState,
                cart: [...previousState.cart, action.item],
            };
        case "remove_from_cart":
            const cartIndex = previousState.cart.findIndex( item  => item.id === action.id
            );

            let updatedCart = [...previousState.cart];

            if (cartIndex >= 0) {
                updatedCart.splice(cartIndex, 1);
            } else {
                console.warn(
                `Can't remove product (name: ${action.id}) as its not in Your WishList!`
                );
            }
            return {
                ...previousState,
                cart: [...updatedCart]
            };

        case "add_to_wishlist": 
            return {
                ...previousState,
                wishlist: [...previousState.wishlist, action.item],
            };
        case "remove_from_wishlist":
            const listIndex = previousState.wishlist.findIndex( item  => item.id === action.id
            );

            let updatedWishlist = [...previousState.wishlist];

            if (listIndex >= 0) {
                updatedWishlist.splice(listIndex, 1);
            } else {
                console.warn(
                `Can't remove product (name: ${action.id}) as its not in Your WishList!`
                );
            }
            return {
                ...previousState,
                wishlist: [...updatedWishlist]
            };

        case "set_user": 
            return {
                ...previousState,
                user: action.user,
            };
        default:
            return previousState;
    }
};