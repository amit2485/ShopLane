
let clothingSection = document.getElementById("clothing_section")
let acessorySection = document.getElementById("accesories_section")

let cartCount = document.getElementById("cart_count")
let cartItemsFromLocalstorge = JSON.parse(localStorage.getItem("cartItems")) 
if(cartItemsFromLocalstorge != null){
    cartCount.innerText = cartItemsFromLocalstorge.length;
}


axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
.then(res => {
    let products = res.data;
    products.map((item,i) => {
        console.log(item);
        if(item.isAccessory == false){
            clothingSection.innerHTML += `
        <div class="cloth_item" onclick="showProduct('${item.id}')">
            <img  src=${item.preview} alt="">
            <p>${item.name}</p>
            <h6>${item.brand}</h6>
            <b>Rs ${item.price}</b>
          </div>`
        }else{
            acessorySection.innerHTML += `
        <div class="cloth_item" onclick="showProduct('${item.id}')">
            <img src=${item.preview} alt="">
            <p>${item.name}</p>
            <h6>${item.brand}</h6>
            <b>Rs ${item.price}</b>
          </div>`
        }
        
    })
})


function showProduct(id){
    location.assign(`specification.html?p_id=${id}`)
    console.log("hiii"+product);
}