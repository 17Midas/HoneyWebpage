import React, { useState } from 'react';

// --- IMPORT YOUR IMAGES HERE ---
import honeyJarCloseup from './assets/honey-jar-closeup.webp';
import beehiveFarm from './assets/beehive-farm.webp';
import honeyDrizzle from './assets/honey-drizzle.webp';
import honeySpread from './assets/honey-spread.webp';
import workerBee from './assets/worker-bee.webp';
// --- END IMAGE IMPORTS ---

const PRODUCTS = [
  { id: 1, size: '500g', price: 600, label: 'Small Jar (500g)' },
  { id: 2, size: '1kg', price: 1100, label: 'Large Jar (1kg)' }
];

const BENEFITS = [
  { title: "100% Organic", desc: "No additives or preservatives." },
  { title: "Raw & Unfiltered", desc: "Retains all natural enzymes." },
  { title: "Local Harvest", desc: "Sourced from the finest local hives." }
];

const REVIEWS = [
  { name: "Sarah W.", text: "The best honey I've tasted in Nairobi! Very thick and pure.", rating: "⭐⭐⭐⭐⭐" },
  { name: "John M.", text: "Fast delivery and the 1kg jar is great value for money.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Mercy K.", text: "My kids love this honey. Perfect for breakfast!", rating: "⭐⭐⭐⭐⭐" }
];

// --- GALLERY IMAGES ARRAY ---
const GALLERY_IMAGES = [
  { src: honeyJarCloseup, alt: "Close-up of Felixo Honey Jar" },
  { src: beehiveFarm, alt: "Beehives on a Felixo Farm" },
  { src: honeyDrizzle, alt: "Golden honey drizzling" },
  { src: honeySpread, alt: "Honey spread on toast" },
  { src: workerBee, alt: "Worker bee on a flower" },
];
// --- END GALLERY IMAGES ARRAY ---

function App() {
  const [cart, setCart] = useState({ size: '500g', qty: 1, price: 600 });
  const PHONE_NUMBER = "254XXXXXXXXX"; // Change to your WhatsApp number

  const handleSizeChange = (e) => {
    const selected = PRODUCTS.find(p => p.size === e.target.value);
    setCart({ ...cart, size: selected.size, price: selected.price });
  };

  const sendWhatsApp = () => {
    const total = cart.price * cart.qty;
    const text = `🍯 *New Felixo-Honey Order*%0A--------------------------%0A*Size:* ${cart.size}%0A*Quantity:* ${cart.qty}%0A*Total Price:* Ksh ${total}%0A--------------------------%0APlease confirm my order!`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="app-container">
      <nav className="navbar"><h1>Felixo-Honey</h1></nav>
      
      {/* Hero Section */}
      <header className="hero">
        <h2>Pure Organic Honey</h2>
        <p>Nature's liquid gold, delivered to your doorstep.</p>
      </header>

      {/* Benefits Section */}
      <section className="section benefits">
        <h2>Why Choose Felixo-Honey?</h2>
        <div className="grid">
          {BENEFITS.map((b, i) => (
            <div key={i} className="benefit-card">
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section gallery">
        <h2>Our Beautiful Honey</h2>
        <div className="image-gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Order Section */}
      <section className="section">
        <div className="order-card">
          <h3>Place Your Order</h3>
          <label>Select Size</label>
          <select onChange={handleSizeChange} value={cart.size}> {/* Added value prop */}
            {PRODUCTS.map(p => <option key={p.id} value={p.size}>{p.label} - Ksh {p.price}</option>)}
          </select>

          <label>Quantity</label>
          <input type="number" min="1" value={cart.qty} onChange={(e) => setCart({...cart, qty: e.target.value})} />

          <div className="total">Total: Ksh {cart.price * cart.qty}</div>
          
          <button onClick={sendWhatsApp} className="wa-btn">
            Order via WhatsApp
          </button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section reviews">
        <h3>What Our Customers Say</h3>
        <div className="grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card">
              <span>{r.rating}</span>
              <p>"{r.text}"</p>
              <strong>- {r.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Felixo-Honey. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
