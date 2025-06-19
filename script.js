function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

//// Add item to cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart.`);
}

// Remove item from cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// Update cart icon count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelectorAll("#cart-count").forEach(el => el.textContent = cart.length);
}

// Display cart contents
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (!container || !totalDisplay) return;

  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.textContent = "Total: Ksh 0";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "service-card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: Ksh ${item.price}</p>
      <button class="btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);
    total += item.price;
  });

  totalDisplay.textContent = `Total: Ksh ${total}`;
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCart();
});

// Booking
function completeBooking(event) {
  event.preventDefault();
  alert('Thank you! Your booking has been confirmed.');
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'index.html';
}

// Contact Form
function sendContact(event) {
  event.preventDefault();
  alert('Your message has been sent. We’ll get back to you shortly!');
}

// Reviews
function submitReview(event) {
  event.preventDefault();
  alert('Thanks for your review!');
}
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}
let currentImageIndex = 0;
const galleryImages = [
  "images/gallery1.jpg",
  "images/gallery2.jpg",
  "images/gallery3.jpg",
  "images/gallery4.jpg",
  "images/gallery5.jpg",
  "images/gallery6.jpg",
  "images/gallery7.jpg",
  "images/gallery8.jpg",
  "images/gallery9.jpg"
];

function openLightbox(src) {
  currentImageIndex = galleryImages.indexOf(src);
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  document.getElementById("lightbox-img").src = galleryImages[currentImageIndex];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById("lightbox-img").src = galleryImages[currentImageIndex];
}
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countEl = document.getElementById("cart-count");
  if (countEl) {
    countEl.textContent = cart.length;
  }
}

// Always update on page load
window.addEventListener("load", updateCartCount);
// Add item to cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart.`);
}

// Remove item from cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// Update cart icon count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelectorAll("#cart-count").forEach(el => el.textContent = cart.length);
}

// Display cart contents
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (!container || !totalDisplay) return;

  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.textContent = "Total: Ksh 0";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "service-card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: Ksh ${item.price}</p>
      <button class="btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);
    total += item.price;
  });

  totalDisplay.textContent = `Total: Ksh ${total}`;
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCart();
});
