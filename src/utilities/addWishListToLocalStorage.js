const addWishlistToLocalStorage = (collection, id, quantity) => {
    let wishlistCollection = getWishList();
    console.log(collection);
    let existing = wishlistCollection.find(product => product.id === collection.id);

    if (existing) {
        existing.quantity += 1;
    }
    else {
        wishlistCollection.push(collection);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlistCollection));
}
const removeWishlistFromTheDb = (collection) => {
    let wishlistCollection = getWishList();
    let removedProduct = wishlistCollection.find(product => product.id === collection.id);
    if (removedProduct) {
        console.log(removedProduct.quantity);

        if (removedProduct.quantity > 1) {
            removedProduct.quantity -= 1;

        }
        else if (removedProduct.quantity === 1) {
            wishlistCollection.pop(removedProduct);
        }
        else {
            wishlistCollection.pop(removedProduct);
        }
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlistCollection));

}

const getWishList = () => {
    let wishlistCollection = [];

    const storedCart = localStorage.getItem('wishlist');
    if (storedCart) {
        wishlistCollection = JSON.parse(storedCart);

    }
    return wishlistCollection;
}

export {
    addWishlistToLocalStorage,
    getWishList,
    removeWishlistFromTheDb
}