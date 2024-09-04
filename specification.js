
console.log(location.search.split('=')[1]);
let product_id = location.search.split('=')[1]
let specification = document.getElementById("specification")
let cartCount = document.getElementById("cart_count")
let cartItemsFromLocalstorge = JSON.parse(localStorage.getItem("cartItems")) 
if(cartItemsFromLocalstorge != null){
    cartCount.innerText = cartItemsFromLocalstorge.length;
}
axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${product_id}`)
.then(res => {
    let product = res.data;
    specification.innerHTML = `
    <div id="image_section">
            <img id="image" src=${product.preview} alt="">
        </div>
        <div id="content_section">
            <h2 id="name">${product.name}</h2>
            <h4 id="brand">${product.brand}</h4>
            <h3 >Price: Rs <span id="price">${product.price}</span></h3>
            <h3>Description</h3>
            <p id="description">${product.description}</p>
            <h2>Product Preview</h2>
            <div id="product_preview">
               
               
            </div>
            <button id="add_to_cart" onclick="addToCart('${product.name}','${product.price}','${product.preview}')">Add to Cart</button>
        </div>`

        let productPreview = document.getElementById("product_preview")
        product.photos.map((item,i) => {
        productPreview.innerHTML += `
     <div class="product_preview_card">
        <img id="img${i}" onclick="productPreviewClicked('img${i}')" class="product_preview_image ${i == 0 ? "active" : ""}" src=${item} alt="">
    </div>
    `
})
})


function addToCart(name,price,img){
    let obj = {
        productName: name,
        productPrice:price,
        productImage:img,
    }
    let cartItemsFromLocalstorge = JSON.parse(localStorage.getItem("cartItems")) 
     if(cartItemsFromLocalstorge == null){
        let cartItems = []
        cartItems.push(obj)
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
        cartCount.innerText = cartItems.length;
     }else{
        let cartItemsFromLocalstorge = JSON.parse(localStorage.getItem("cartItems")) 
        cartItemsFromLocalstorge.push(obj);
        localStorage.setItem("cartItems",JSON.stringify(cartItemsFromLocalstorge))
        cartCount.innerText = cartItemsFromLocalstorge.length;
     }
    
}




function productPreviewClicked(id){
   document.getElementsByClassName('active')[0].classList.remove('active')
   document.getElementById(id).classList.add('active')
   //console.log(document.getElementById(id).src);

   document.getElementById('image').src = document.getElementById(id).src
}