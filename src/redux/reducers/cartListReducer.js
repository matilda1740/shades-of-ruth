export const initialState = {
    cart: localStorage.getItem('cart') === null || localStorage.getItem('cart') === "undefined" ? [] : JSON.parse(localStorage.getItem('cart')),
    wishlist: localStorage.getItem('wishlist') === null || localStorage.getItem('wishlist') === "undefined"? [] : JSON.parse(localStorage.getItem('wishlist')),
};

export const getSubTotal = (cart) => {
  return cart?.reduce((amount, item) => item.quantity > 1 ? amount+=parseInt(item.price * item.quantity) :amount+=parseInt(item.price), 0)   
};

export const getproductTotal = (cart) => cart?.reduce((amount, item) => amount+=parseInt(item.quantity), 0);

const cartListReducer = (previousState = initialState, action) => {
    switch (action.type) {
        case "add_to_cart": 
            let addedCart = [...previousState.cart]; 

            try{
                let itemExists = addedCart.find( product => product.id === action.item.id);

                if (!itemExists){
                    addedCart.push(action.item);
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
        case "reset_cart":
            let resetCart = [...previousState.cart]; 
            if(resetCart.length > 0){
            resetCart.splice(0, resetCart.length)
            localStorage.removeItem('cart');
            }
            return {
                ...previousState, 
                cart: [...resetCart]
            };
        case "coupon_code": 
            let couponBoolean = previousState.isCoupon;
            let couponFinal = previousState.finalAmount;

            if(action.boolean){
                couponBoolean = true
                couponFinal = action.total * 0.9;
            } else{
                couponBoolean = false
                couponFinal = action.total;              
            }

            return {
                ...previousState, 
                isCoupon: couponBoolean,
                finalAmount: couponFinal
            };

        case "increase_qty": 
            let increasedCart = [...previousState.cart]; 
            try{
                let productId = increasedCart.find( product => product.id === action.id)
                productId ? productId.quantity = parseInt(productId.quantity) + 1 : console.log("error", productId);
            }catch(error){
                console.log(error);
            }

            return {
                ...previousState,
                cart: increasedCart
            };

        case "reduce_quantity":
            let currentCartCopy = [...previousState.cart]; 
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
                console.log("error removing from cart")
            }
            return {
                ...previousState,
                wishlist: [...updatedWishlist]
            };       
        
        default:
            return previousState;
    }
};

export default cartListReducer;