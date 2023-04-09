// Add data to local storage

export const addToDb = id => {
    let shoppingCart = {}
    const previousCart = localStorage.getItem('shopping-cart');
    if (previousCart) {
        shoppingCart = JSON.parse(previousCart);
    }

    //add quantity 
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } 
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

export const getLocalData = (key) => {
    let parsedData ={}
    const data = localStorage.getItem(key)
    if (data) {
        parsedData= JSON.parse(data)
    }
    return parsedData
}

// remove specific storage item
export const removeFromDb = id => {
    const storedCart = getLocalData('shopping-cart')
    if (id in storedCart) {
        delete storedCart[id]
    }
    localStorage.setItem('shopping-cart',JSON.stringify(storedCart))
}

export const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')