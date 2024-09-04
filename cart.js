let cartCount = document.getElementById("cart_count")
let cartItemsFromLocalstorge = JSON.parse(localStorage.getItem("cartItems")) 
let totalBill = document.getElementById("total_bill")

if(cartItemsFromLocalstorge != null){
    cartCount.innerText = cartItemsFromLocalstorge.length;
    let bill = cartItemsFromLocalstorge.reduce((acc,item,i) => {
        return acc + parseFloat(item.productPrice)
    }
    ,0)

    totalBill.innerText = bill
}

let cartSection = document.getElementById("cart_section")

cartItemsFromLocalstorge.map((item,i) => {
    cartSection.innerHTML += `<div class="product_item">
            <img class="product_item_img" src=${item.productImage} alt="">
            <p>${item.productName}</p>
            <b>Rs ${item.productPrice}</b>
            <div>
             <button id="remove_from_cart_btn" onclick="removeFromCart('${i}')">Remove from Cart</button>
             </div>
            </div>`
         
})

function removeFromCart(index){
    let cartItemsFromLocalstorge = JSON.parse(localStorage.getItem("cartItems"))
    cartItemsFromLocalstorge.splice(index,1)
    localStorage.setItem("cartItems",JSON.stringify(cartItemsFromLocalstorge))
    location.reload()
}


function placeOrder(){
    localStorage.removeItem("cartItems")
    alert("Your order has been placed successfully !!")
    location.reload()
    
}