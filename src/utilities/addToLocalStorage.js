const addtolocalstorage = (collection, id, quantity) => {
    let arrayCollection = getStoredCart();
    // console.log(collection);
    let existing = arrayCollection.find(product => product.id === collection.id);

    if (existing) {
        existing.quantity += 1;
    }
    else {
        arrayCollection.push(collection);
    }
    //adding quantity

    localStorage.setItem('shoppingcart', JSON.stringify(arrayCollection));
}

const removetheDb = (collection) => {
    let arrayCollection = getStoredCart();
    let removedProduct = arrayCollection.find(product => product.id === collection.id);
    if (removedProduct) {
        console.log(removedProduct.quantity);

        if (removedProduct.quantity > 0) {
            removedProduct.quantity -= 1;

        }
        else {
            arrayCollection.pop(removedProduct);
        }
        // arrayCollection.shift(removedProduct);
    }
    localStorage.setItem('shoppingcart', JSON.stringify(arrayCollection));
    // if (collection in arrayCollection) {
    //     delete arrayCollection[collection];

    // }
}

const getStoredCart = () => {
    let arrayCollection = [];

    const storedCart = localStorage.getItem('shoppingcart');
    if (storedCart) {
        arrayCollection = JSON.parse(storedCart);

    }
    return arrayCollection;
}

const deletetheStoredCart = () => {
    localStorage.removeItem('shoppingcart');
}

export {
    addtolocalstorage,
    removetheDb,
    getStoredCart,
    deletetheStoredCart
};