

//CHECK INDEX JS FOR NEW INITIAL STATE
export const initialState = {
    cart: [],
    wishlist: [],
    user: null,
};

// const removeFromCart = (id, quantity) => {
//     console.log("Removed")

//     return {
//         type: "remove_from_cart",
//         id,
//         quantity
//     }
// };

export const getSubTotal = (cart) => {

  return cart?.reduce((amount, item) => item.quantity > 1 ? amount+=parseInt(item.price * item.quantity) :amount+=parseInt(item.price), 0)   
}

// THIS FUNCTION IS SO COOL

export const getproductTotal = (cart) => cart?.reduce((amount, item) => amount+=parseInt(item.quantity), 0)

export const reducer = (previousState = initialState, action) => {
    switch (action.type) {
    
        // RIGHT WAY TO ACCESS ACTION ID = action.item.id chack console.log(action) FOR DETAILS

        case "add_to_cart": //THIS IS WORKING JUST TRY GET CORRECT TOTAL FROM PRODUCT TOTAL
            let addedCart = [...previousState.cart]; // copy of cart

            try{
                let itemExists = addedCart.find( product => product.id === action.item.id);

                if (!itemExists){
                    addedCart.push(action.item);
                    console.log("NEW CART ITEMS: ", action.item)
                }

            }catch(error){
                console.log(error);
            }
            return {
                ...previousState,
                cart: addedCart,
            };
    
        case "remove_from_cart":
            const cartIndex = previousState.cart.findIndex( item  => item.id === action.id);
            let updatedCart = [...previousState.cart];

            if (cartIndex >= 0) {
                updatedCart.splice(cartIndex, 1);
            } else {
                console.log("error removing from cart")
            }
            return {
                ...previousState,
                cart: [...updatedCart]
            };
        // RIGHT WAY TO ACCESS ACTION ID = action.id chack console.log(action) FOR DETAILS
        
        case "increase_qty": 
            let increasedCart = [...previousState.cart]; // copy of cart
            
            try{
                let productId = increasedCart.find( product => product.id === action.id)
                productId ? productId.quantity = parseInt(productId.quantity) + 1 : console.log("error", productId);
            }catch(error){
                console.log(error);
            }

            return {
                ...previousState,
                cart: increasedCart
            }
        case "reduce_quantity":
            let currentCartCopy = [...previousState.cart]; // copy of cart

            try{
                let itemExists = currentCartCopy.find( product => product.id === action.id);
                itemExists.quantity <= 1 ? 
                     currentCartCopy.splice(previousState.cart.findIndex( item  => item.id === action.id), 1)
                    :itemExists.quantity = parseInt(itemExists.quantity) - 1
                
            }catch(error){
                console.log(error);
            }
            return {
                ...previousState,
                cart: currentCartCopy
            };
        
        case "add_to_wishlist": 
            let addedList = [...previousState.wishlist];

            try{
                let itemExists = addedList.find( product => product.id === action.item.id);

                if (!itemExists){
                     addedList.push(action.item);
                    console.log("NEW LIST ITEMS: ", action.item)
                }

            }catch(error){
                console.log(error);
            }        
            return {
                ...previousState,
                wishlist: addedList
            };
       
        case "remove_from_wishlist":
            const listIndex = previousState.wishlist.findIndex( item  => item.id === action.id
            );

            let updatedWishlist = [...previousState.wishlist];

            if (listIndex >= 0) {
                updatedWishlist.splice(listIndex, 1);
            } else {
                alert(`Can't remove product (name: ${action.id}) as its not in Your WishList!`)
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

        case "add_delivery_charges":
            return {

            };
        default:
            return previousState;
    }
};