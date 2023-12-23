window.onload=function(){
    renderProducts();
}
async function getProducts() {
    let response = await fetch(
        "https://electro-comm-default-rtdb.firebaseio.com/products.json"
    );
    const json = await response.json();
    return json;
}
async function renderProducts() {
    const productsSection = document.querySelector('#content');
  
    try {
      const productsArray = await getProducts();
  
      productsArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
  
        const imageElement = document.createElement('img');
        imageElement.src = product.imageUrl;
        productDiv.appendChild(imageElement);
  
        const titleElement = document.createElement('h3');
        titleElement.textContent = product.imageTitle;
        productDiv.appendChild(titleElement);
  
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${product.price}`;
        productDiv.appendChild(priceElement);
  
        productsSection.appendChild(productDiv);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  
  // Wait for the DOM to be fully loaded before rendering products
  document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
  });
  
// async function addProductsToDiv(){
//     const json = await getProducts();
//     let content = document.getElementById();
    

// }