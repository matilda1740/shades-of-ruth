import { useStateValue } from './StateProvider'


export const addToCartAction = (id, type, name, image, description, price, quantity) => {
    return({
        type: "add_to_cart", 
        item: {
            id,
            type,
            name,
            image,
            description,
            price,
            quantity,
        },
    })    
}
