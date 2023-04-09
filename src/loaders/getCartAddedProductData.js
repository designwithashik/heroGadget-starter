import { getLocalData } from "../utilities/fakeDB";

export const productsAndCartData = async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json();
    let cart = []
    const savedCart = getLocalData('shopping-cart')
    for (const productID in savedCart) {
        const foundProduct = products.find(product => product.id === productID)
        if (foundProduct) {
            foundProduct.quantity= savedCart[productID]
        cart.push(foundProduct)
        }
    }
    console.log(cart)
    return {cart, products};
}