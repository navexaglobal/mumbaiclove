/**
 * MumbaiClove — static food commerce
 * Cart: localStorage key "masalaCart"
 * Configure business constants below for your deployment.
 */

const BUSINESS = {
  name: "MumbaiClove",
  whatsappCountryCode: "91", // India; no +
  whatsappNumber: "9224471960", // Replace with your number (digits only)
  phoneDisplay: "+91 9224471960",
  address: "601 Himalay Apartment, chendani koliwada, Thane east mumbai 400603",
  email: "",
  upiId: "vaishalikoli10@okaxis",
};  

/** @type {Array<{id:string,name:string,price:number,category:string,protein:string,description:string,ingredients:string[],image:string,badges:string[],youtubeId:string|null,featured?:boolean}>} */
const PRODUCTS = [
  {
    id: "mc-001",
    name: "Authentic Garam Masala",
    price: 199,
    category: "blends",
    protein: "veg",
    description:
      "Aromatic whole-spice blend with star anise, cinnamon, green cardamom, nutmeg, bay leaf, and cumin. Natural colour, no preservatives — best within six months of packing.",
    ingredients: ["Star anise", "Cinnamon", "Green cardamom", "Nutmeg", "Bay leaf", "Cumin"],
    image: "images/products/mc-09.png",
    badges: ["bestseller", "natural"],
    youtubeId: null,
    featured: true,
  },
  {
    id: "mc-002",
    name: "Premium Haldi (Turmeric) Powder",
    price: 120,
    category: "powders",
    protein: "veg",
    description:
      "Bright, fine-ground turmeric with natural colour and no added preservatives. Ideal for everyday cooking, marinades, and golden milk. Store in a cool, dry place.",
    ingredients: ["Turmeric"],
    image: "images/products/mc-27.png",
    badges: ["natural", "veg"],
    youtubeId: null,
    featured: true,
  },
  {
    id: "mc-003",
    name: "Kashmiri Red Chili Powder",
    price: 149,
    category: "powders",
    protein: "veg",
    description:
      "Deep red colour with mild heat — perfect for curries, tandoori marinades, and rice. No artificial colours or preservatives; vegetarian.",
    ingredients: ["Kashmiri red chili"],
    image: "images/products/mc-06.png",
    badges: ["natural", "veg"],
    youtubeId: null,
    featured: true,
  },
  {
    id: "mc-004",
    name: "Laal Tikhat (Red Chili) Powder",
    price: 129,
    category: "powders",
    protein: "veg",
    description:
      "Finely ground red chili for everyday heat and colour. Natural colour, no preservatives added. A kitchen essential for tadka, gravies, and dry sabzis.",
    ingredients: ["Red chili"],
    image: "images/products/mc-04.png",
    badges: ["spicy", "natural"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-005",
    name: "Fusion Masala Mix",
    price: 189,
    category: "mixes",
    protein: "veg",
    description:
      "Instant masala for both gravy and dry dishes — veg or non-veg. Layered with coriander, cumin, ginger-garlic notes, chilies, and whole spices. Best before six months from packing.",
    ingredients: ["Coriander", "Cumin", "Chilies", "Cinnamon", "Cloves", "Star anise", "Fennel"],
    image: "images/products/mc-15.png",
    badges: ["bestseller", "natural"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-006",
    name: "Agri Koli Masala",
    price: 189,
    category: "blends",
    protein: "veg",
    description:
      "Coastal Maharashtra-style blend with chili, turmeric, mustard, fennel, stone flower, star anise, and more. Bold, aromatic, and perfect for fish and chicken curries.",
    ingredients: ["Red chili", "Turmeric", "Mustard", "Fennel", "Cloves", "Cinnamon", "Stone flower", "Star anise"],
    image: "images/products/mc-08.png",
    badges: ["spicy", "natural"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-007",
    name: "Goda Masala",
    price: 179,
    category: "blends",
    protein: "veg",
    description:
      "Classic Maharashtrian sweet–spicy blend with coriander, sesame, coconut, stone flower, and aromatic whole spices. Ideal for everyday varans, usals, and bhajis.",
    ingredients: ["Coriander", "Sesame", "Coconut", "Cinnamon", "Cloves", "Black pepper", "Asafoetida"],
    image: "images/products/mc-13.png",
    badges: ["veg", "natural"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-008",
    name: "Slow-Roasted Rajgira Flour",
    price: 169,
    category: "flours",
    protein: "veg",
    description:
      "Low-flame roasted amaranth flour for soft rotis and thalipeeth with less cracking. High fibre and calcium, great for fasting recipes — puri, sheera, ladoo, and more.",
    ingredients: ["Rajgira (amaranth)"],
    image: "images/products/mc-17.png",
    badges: ["bestseller", "natural"],
    youtubeId: null,
    featured: true,
  },
  {
    id: "mc-009",
    name: "Kaddhanye Thalipith Bhajani",
    price: 199,
    category: "flours",
    protein: "veg",
    description:
      "High-protein multigrain bhajani with millets and pulses — no preservatives. Use for thalipith, dhapate, uttappa, and paratha. Great for a fibre-rich, wholesome meal.",
    ingredients: ["Mixed millets", "Grains", "Pulses", "Spices"],
    image: "images/products/mc-02.png",
    badges: ["natural", "veg"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-010",
    name: "Traditional Thalipith Bhajani",
    price: 169,
    category: "flours",
    protein: "veg",
    description:
      "Hand-picked grains roasted and ground for authentic thalipith, dhapate, paratha, and spiced flatbreads. Homestyle taste with dietary fibre in every bite.",
    ingredients: ["Mixed grains", "Lentils", "Spices"],
    image: "images/products/mc-18.png",
    badges: ["veg", "natural"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-011",
    name: "Premium Modak Flour (3-Rice Blend)",
    price: 219,
    category: "flours",
    protein: "veg",
    description:
      "Fragrant modak flour blended from Indrayani, Basmati, and Ambemohar rice — soft dough, easy pleating, traditional ukadiche modak at home. No added preservatives.",
    ingredients: ["Indrayani rice", "Basmati rice", "Ambemohar rice"],
    image: "images/products/mc-03.png",
    badges: ["bestseller", "veg"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-012",
    name: "Malwani Vade Mix",
    price: 149,
    category: "mixes",
    protein: "veg",
    description:
      "Authentic Kokan-style mix for puffed malwani vade — rich flavour and less oil absorption. Pair with spicy coastal curries and sol kadhi.",
    ingredients: ["Rice", "Lentils", "Black pepper", "Spices"],
    image: "images/products/mc-22.png",
    badges: ["natural", "veg"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-013",
    name: "Upwas Bhajani (Fasting Mix)",
    price: 89,
    category: "mixes",
    protein: "veg",
    description:
      "Roasted fasting flour with bhagar, sabudana, rajgira, and cumin — perfect for crispy upwas thalipeeth and vrat-friendly snacks.",
    ingredients: ["Bhagar (barnyard millet)", "Sabudana", "Rajgira", "Cumin"],
    image: "images/products/mc-26.png",
    badges: ["veg", "natural"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-014",
    name: "Ghavan Flour (Instant Breakfast)",
    price: 170,
    category: "flours",
    protein: "veg",
    description:
      "Fine flour for thin, soft ghavan (savoury rice crepes) — quick breakfast or light dinner. Vegetarian; great with coconut chutney.",
    ingredients: ["Rice", "Lentils", "Salt"],
    image: "images/products/mc-20.png",
    badges: ["veg", "new"],
    youtubeId: null,
    featured: false,
  },
  {
    id: "mc-015",
    name: "Nachni Sattva (Sprouted Ragi)",
    price: 100,
    category: "flours",
    protein: "veg",
    description:
      "Traditional finger millet (nachni) malt-style flour — iron-rich and naturally nutritious. Use for amboli, porridge, and health-forward recipes.",
    ingredients: ["Sprouted finger millet (ragi)"],
    image: "images/products/mc-21.png",
    badges: ["natural", "veg"],
    youtubeId: null,
    featured: false,
  },
];

const CART_KEY = "masalaCart";
const LOADER_ID = "page-loader";

const BADGE_STYLES = {
  bestseller: "bg-gradient-to-r from-amber-500 to-orange-600 text-white",
  spicy: "bg-chili-600 text-white",
  new: "bg-fresh-600 text-white",
  veg: "bg-fresh-700 text-white",
  natural: "bg-emerald-700 text-white",
};

/** @returns {Record<string, number>} */
function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

/** @param {Record<string, number>} cart */
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount() {
  const cart = getCart();
  return Object.values(cart).reduce((a, b) => a + b, 0);
}

function getCartTotal() {
  const cart = getCart();
  let total = 0;
  for (const [id, qty] of Object.entries(cart)) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (p) total += p.price * qty;
  }
  return total;
}

/** @param {string} productId @param {number} [delta] */
function addToCart(productId, delta = 1) {
  const cart = { ...getCart() };
  const next = (cart[productId] || 0) + delta;
  if (next <= 0) delete cart[productId];
  else cart[productId] = next;
  saveCart(cart);
  updateCartBadges();
  document.dispatchEvent(new CustomEvent("masalaCartUpdated"));
}

function setCartQuantity(productId, qty) {
  const cart = { ...getCart() };
  if (qty <= 0) delete cart[productId];
  else cart[productId] = qty;
  saveCart(cart);
  updateCartBadges();
  document.dispatchEvent(new CustomEvent("masalaCartUpdated"));
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadges();
  document.dispatchEvent(new CustomEvent("masalaCartUpdated"));
}

function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = String(count);
    el.classList.toggle("hidden", count === 0);
  });
}

function whatsappPhoneDigits() {
  return `${BUSINESS.whatsappCountryCode}${BUSINESS.whatsappNumber}`.replace(/\D/g, "");
}

/** Generic chat link (footer, contact) */
function whatsappChatLink(message) {
  const phone = whatsappPhoneDigits();
  if (message)
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return `https://wa.me/${phone}`;
}

function whatsappOrderLink() {
  const cart = getCart();
  const lines = [];
  let total = 0;
  for (const [id, qty] of Object.entries(cart)) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) continue;
    const lineTotal = p.price * qty;
    total += lineTotal;
    lines.push(`• ${p.name} x${qty} — ₹${lineTotal}`);
  }
  const body =
    lines.length > 0
      ? [
          `Hi ${BUSINESS.name}! I'd like to place an order:`,
          "",
          ...lines,
          "",
          `*Total: ₹${total}*`,
          "",
          "Please confirm availability and delivery time.",
        ].join("\n")
      : `Hi ${BUSINESS.name}! I'd like to place an order for spices and flour mixes. Please share availability and MRP.`;
  const phone = whatsappPhoneDigits();
  return `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/** @param {string[]} badges */
function renderBadges(badges) {
  if (!badges || !badges.length) return "";
  return badges
    .map((b) => {
      const cls = BADGE_STYLES[b] || "bg-stone-600 text-white";
      const label = b.charAt(0).toUpperCase() + b.slice(1);
      return `<span class="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${cls}">${escapeHtml(label)}</span>`;
    })
    .join(" ");
}

/** @param {typeof PRODUCTS[0]} product */
function productCardHtml(product, opts = {}) {
  const { compact } = opts;
  const badges = renderBadges(product.badges);
  return `
    <article class="group product-card bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-amber-100/80 transition-all duration-300 hover:-translate-y-1">
      <a href="product.html?id=${encodeURIComponent(product.id)}" class="block relative aspect-[4/3] overflow-hidden bg-cream-200">
        <img src="${escapeHtml(product.image)}" alt="" class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" width="800" height="600">
        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">${badges}</div>
      </a>
      <div class="p-4 ${compact ? "pb-3" : ""}">
        <a href="product.html?id=${encodeURIComponent(product.id)}" class="block">
          <h3 class="font-bold text-stone-800 text-lg leading-tight group-hover:text-chili-700 transition-colors">${escapeHtml(product.name)}</h3>
          <p class="text-stone-500 text-sm mt-1 line-clamp-2">${escapeHtml(product.description)}</p>
        </a>
        <div class="flex items-center justify-between mt-4 gap-2">
          <span class="text-xl font-extrabold bg-gradient-to-r from-turmeric-500 to-chili-600 bg-clip-text text-transparent">₹${product.price}</span>
          <button type="button" data-add-cart="${escapeHtml(product.id)}" class="add-cart-btn px-4 py-2 rounded-xl bg-gradient-to-r from-turmeric-500 to-orange-500 text-chili-900 font-bold text-sm shadow-md hover:shadow-lg hover:from-turmeric-400 hover:to-orange-400 transition-all active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </article>`;
}

function bindAddToCart(root = document) {
  root.querySelectorAll("[data-add-cart]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-add-cart");
      if (id) {
        addToCart(id, 1);
        btn.classList.add("ring-2", "ring-fresh-500");
        setTimeout(() => btn.classList.remove("ring-2", "ring-fresh-500"), 400);
      }
    });
  });
}

/** @param {string} query */
function searchProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.includes(q) ||
      p.protein.includes(q)
  );
}

/** @param {string|null} cat powders|blends|flours|mixes */
/** @param {string|null} protein legacy filter (veg) — optional */
function filterProducts(cat, protein) {
  let list = PRODUCTS;
  if (cat && cat !== "all") list = list.filter((p) => p.category === cat);
  if (protein === "chicken") list = list.filter((p) => p.protein === "chicken");
  if (protein === "veg") list = list.filter((p) => p.protein === "veg");
  if (protein === "combos") list = list.filter((p) => p.category === "combos");
  return list;
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function injectHeaderFooter() {
  const active = document.body?.dataset?.navActive || "";
  const cartCount = getCartCount();
  const countClass = cartCount === 0 ? "hidden" : "";

  const header = `
  <header class="sticky top-0 z-50 backdrop-blur-md bg-cream-100/90 border-b border-amber-200/60 shadow-sm">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-[4.25rem]">
      <a href="index.html" class="flex items-center gap-2 group">
        <img src="images/logo.svg" alt="${escapeHtml(BUSINESS.name)}" class="h-9 w-9 md:h-10 md:w-10 rounded-xl shadow-md ring-2 ring-turmeric-400/50 group-hover:ring-chili-500/40 transition-all" width="40" height="40">
        <span class="font-extrabold text-lg md:text-xl tracking-tight bg-gradient-to-r from-chili-700 via-orange-600 to-turmeric-500 bg-clip-text text-transparent">${escapeHtml(BUSINESS.name)}</span>
      </a>
      <div class="hidden md:flex items-center gap-1">
        <a href="index.html" class="nav-link px-3 py-2 rounded-lg text-stone-700 hover:bg-turmeric-500/15 font-medium ${active === "home" ? "bg-turmeric-500/20 text-chili-800" : ""}">Home</a>
        <a href="menu.html" class="nav-link px-3 py-2 rounded-lg text-stone-700 hover:bg-turmeric-500/15 font-medium ${active === "menu" ? "bg-turmeric-500/20 text-chili-800" : ""}">Shop</a>
        <a href="categories.html" class="nav-link px-3 py-2 rounded-lg text-stone-700 hover:bg-turmeric-500/15 font-medium ${active === "categories" ? "bg-turmeric-500/20 text-chili-800" : ""}">Categories</a>
        <a href="contact.html" class="nav-link px-3 py-2 rounded-lg text-stone-700 hover:bg-turmeric-500/15 font-medium ${active === "contact" ? "bg-turmeric-500/20 text-chili-800" : ""}">Contact</a>
      </div>
      <div class="flex items-center gap-2 sm:gap-3">
        <a href="cart.html" class="relative p-2 rounded-xl bg-white border border-amber-200/80 shadow-sm hover:shadow-md hover:border-turmeric-400 transition-all" aria-label="Cart">
          <svg class="w-6 h-6 text-chili-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          <span data-cart-count class="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-chili-600 text-white text-xs font-bold ${countClass}">${cartCount}</span>
        </a>
        <button type="button" id="mobile-menu-btn" class="md:hidden p-2 rounded-xl bg-turmeric-500/20 text-chili-800" aria-label="Open menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </nav>
    <div id="mobile-nav" class="hidden md:hidden border-t border-amber-200/60 bg-cream-100 px-4 py-3 space-y-1">
      <a href="index.html" class="block py-2 px-3 rounded-lg font-medium ${active === "home" ? "bg-turmeric-500/25 text-chili-800" : "text-stone-700"}">Home</a>
      <a href="menu.html" class="block py-2 px-3 rounded-lg font-medium ${active === "menu" ? "bg-turmeric-500/25 text-chili-800" : "text-stone-700"}">Shop</a>
      <a href="categories.html" class="block py-2 px-3 rounded-lg font-medium ${active === "categories" ? "bg-turmeric-500/25 text-chili-800" : "text-stone-700"}">Categories</a>
      <a href="contact.html" class="block py-2 px-3 rounded-lg font-medium ${active === "contact" ? "bg-turmeric-500/25 text-chili-800" : "text-stone-700"}">Contact</a>
    </div>
  </header>`;

  const year = new Date().getFullYear();
  const footer = `
  <footer class="mt-auto bg-gradient-to-b from-chili-900 to-chili-950 text-amber-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <div class="flex items-center gap-2 mb-4">
          <img src="images/logo.svg" alt="" class="h-10 w-10 rounded-xl" width="40" height="40">
          <span class="font-bold text-xl">${escapeHtml(BUSINESS.name)}</span>
        </div>
        <p class="text-amber-100/80 text-sm leading-relaxed">Premium spices, masalas, and flours — order on WhatsApp in one tap.</p>
      </div>
      <div>
        <h3 class="font-bold text-turmeric-400 mb-3">Quick links</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="menu.html" class="hover:text-white transition-colors">Full shop</a></li>
          <li><a href="categories.html" class="hover:text-white transition-colors">Categories</a></li>
          <li><a href="cart.html" class="hover:text-white transition-colors">Cart</a></li>
          <li><a href="contact.html" class="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold text-turmeric-400 mb-3">Follow us</h3>
        <div class="flex gap-3">
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-turmeric-500 transition-colors" aria-label="Instagram"><span class="sr-only">Instagram</span><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-turmeric-500 transition-colors" aria-label="Facebook"><span class="sr-only">Facebook</span><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="${whatsappChatLink()}" class="w-10 h-10 rounded-full bg-fresh-600 flex items-center justify-center hover:bg-fresh-500 transition-colors" aria-label="WhatsApp"><span class="sr-only">WhatsApp</span><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
        </div>
        <p class="mt-4 text-xs text-amber-200/60">© ${year} ${escapeHtml(BUSINESS.name)}. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

  const shellHeader = document.getElementById("site-header");
  const shellFooter = document.getElementById("site-footer");
  if (shellHeader) shellHeader.innerHTML = header;
  if (shellFooter) shellFooter.innerHTML = footer;

  const btn = document.getElementById("mobile-menu-btn");
  const panel = document.getElementById("mobile-nav");
  if (btn && panel) {
    btn.addEventListener("click", () => panel.classList.toggle("hidden"));
  }
}

function hidePageLoader() {
  const el = document.getElementById(LOADER_ID);
  if (!el) return;
  el.classList.add("opacity-0", "pointer-events-none");
  setTimeout(() => {
    el.remove();
  }, 400);
}

document.addEventListener("DOMContentLoaded", () => {
  injectHeaderFooter();
  updateCartBadges();
  document.addEventListener("masalaCartUpdated", updateCartBadges);
  window.requestAnimationFrame(() => {
    setTimeout(hidePageLoader, 280);
  });
});

// Export for inline page scripts
window.MumbaiCloveApp = {
  BUSINESS,
  PRODUCTS,
  getCart,
  addToCart,
  setCartQuantity,
  clearCart,
  getCartTotal,
  getCartCount,
  whatsappOrderLink,
  whatsappChatLink,
  productCardHtml,
  bindAddToCart,
  searchProducts,
  filterProducts,
  getQueryParam,
  renderBadges,
  escapeHtml,
  injectHeaderFooter,
  updateCartBadges,
};
