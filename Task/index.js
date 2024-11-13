// API endpoint with a delay
const URL = "https://run.mocky.io/v3/92348b3d-54f7-4dc5-8688-ec7d855b6cce?mocky-delay=500ms";

// Function to fetch and display all product details
async function GetData() {
  document.getElementById('fetchButton').style.display = 'none';
  try {
    console.log("Getting Data...");
    const response = await fetch(URL);
    const data = await response.json();

    // Get the product list container
    const productList = document.getElementById('product-list');

    // Clear any existing content
    productList.innerHTML = '';

    // Loop through each product in the data array
    data.forEach((item) => {
      // Extract product details
      let imageSrc = item.product.images[0].src;
      let productTitle = item.product.title;
      let productCost = item.product.variants[0].price;
      let productDetails = item.product.images[0].alt;

      // Create product card div
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      // Create and add product image
      const productImage = document.createElement('img');
      productImage.src = imageSrc;
      productImage.alt = productDetails;
      productCard.appendChild(productImage);

      // Create and add product title
      const productName = document.createElement('div');
      productName.classList.add('product-name');
      productName.textContent = productTitle;
      productCard.appendChild(productName);

      // Create and add product price
      const productPrice = document.createElement('div');
      productPrice.classList.add('product-price');
      productPrice.textContent = `$${productCost}`;
      productCard.appendChild(productPrice);

      // Create and add product description
      const productDescription = document.createElement('div');
      productDescription.classList.add('product-description');
      productDescription.textContent = productDetails;
      productCard.appendChild(productDescription);

      // Append the product card to the product list
      productList.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
