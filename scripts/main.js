/*
    Learning objectives assessed in this exercise:
        1. Functions, arguments, parameters, return values
        2. Array iteration
        3. Debugging with Dev Tools
        4. Variable scope
        5. Algorithmic thinking
        
    You need to figure out how to make the message display the 
    total cost of items added to the shopping cart. We strongly
    suggest that you read the current code, understand what each
    line does, and write comments before you start fixing any
    bugs, or writing new code.
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

// This might be a good place to write code to add items to the shopping cart


/*
    Get the total of items in the cart and display the total in a console message
*/
const total = calculateCartTotal()
console.log(`The current items in your cart will cost ${total}`)
