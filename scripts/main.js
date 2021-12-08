/*
    You need to figure out how to make the message display the 
    total cost of items added to the shopping cart.
*/

const shoppingCart = []

const calculateCartTotal = (cartItems) => {
    total = 0
    
    for (const cartItem of cartItems) {
        total = total + cartItem.price
    }
}

const addItemToCart = (item) => {
    cart.push(item)
}


/*
    Items that can be added to the shopping cart
*/
const plushToy = { id: 1, price: 14.78, name: "Beanie Baby" }
const kite = { id: 2, price: 8.49, name: "Dragon Kite" }
const watch = { id: 3, price: 102.32, name: "Seiko Kinetic Wristwatch" }



/*
    Get the total of items in the cart and display the total in a console message
*/
const total = calculateCartTotal()
console.log(`The current items in your cart will cost ${total}`)
