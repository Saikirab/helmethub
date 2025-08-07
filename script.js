let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart!");
}

function viewCart() {
  const cartPopup = document.getElementById("cartPopup");
  const cartItems = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const whatsappLink = document.getElementById("whatsappCheckout");

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPriceEl.textContent = total;

  // Create WhatsApp message
  const message = cart.map(i => `• ${i.name} - ₹${i.price}`).join('%0A') + `%0A%0ATotal: ₹${total}`;
  const phone = '91XXXXXXXXXX'; // Replace with your WhatsApp number
  whatsappLink.href = `https://wa.me/${phone}?text=Hello,%20I'd%20like%20to%20order:%0A${message}`;

  cartPopup.style.display = 'block';
}

function closeCart() {
  document.getElementById("cartPopup").style.display = 'none';
}
