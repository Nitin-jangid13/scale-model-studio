import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const portfolio = [
    { id: 1, title: 'Luxury Apartment Complex', category: 'Residential', image: '🏢', price: '₹45,000' },
    { id: 2, title: 'Corporate Office Building', category: 'Commercial', image: '🏗️', price: '₹60,000' },
    { id: 3, title: 'Shopping Mall Design', category: 'Commercial', image: '🛍️', price: '₹75,000' },
    { id: 4, title: 'Mixed-Use Development', category: 'Residential', image: '🌆', price: '₹85,000' },
    { id: 5, title: 'Institutional Building', category: 'Institutional', image: '🏛️', price: '₹55,000' },
    { id: 6, title: 'Hospitality Project', category: 'Commercial', image: '🏨', price: '₹70,000' },
  ];

  const services = [
    { name: 'Residential Model', desc: '1:100 scale, up to 50 sq units', price: '₹35,000', time: '15-20 days' },
    { name: 'Commercial Complex', desc: '1:100 scale, office building', price: '₹55,000', time: '20-25 days' },
    { name: 'Mixed-Use Project', desc: '1:100 scale, retail + residential', price: '₹75,000', time: '25-30 days' },
    { name: 'Institutional Building', desc: '1:50 scale, detailed interior', price: '₹65,000', time: '20-25 days' },
  ];

  const addToCart = () => setCartCount(cartCount + 1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:scalemodelstudio@gmail.com?subject=Project Inquiry from ${name}&body=Name: ${name}%0DEmail: ${email}%0D%0DProject Details:%0D${message}`;
    window.location.href = mailtoLink;
    e.target.reset();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Scale Model Studio</div>
          <div className="nav-links">
            <button onClick={() => setCurrentPage('home')} className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}>Home</button>
            <button onClick={() => setCurrentPage('portfolio')} className={`nav-btn ${currentPage === 'portfolio' ? 'active' : ''}`}>Portfolio</button>
            <button onClick={() => setCurrentPage('shop')} className={`nav-btn ${currentPage === 'shop' ? 'active' : ''}`}>Shop</button>
            <button onClick={() => setCurrentPage('contact')} className={`nav-btn ${currentPage === 'contact' ? 'active' : ''}`}>Contact</button>
            <div className="cart-icon" onClick={() => setCurrentPage('cart')}>
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <div>
          <div className="hero">
            <h1>Precision Scale Models for Architecture</h1>
            <p>Professional architectural scale models crafted with precision for architects, developers, and institutions. 4+ years of expertise in bringing designs to life.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => setCurrentPage('portfolio')}>View Portfolio</button>
              <button className="btn btn-secondary" onClick={() => setCurrentPage('contact')}>Get in Touch</button>
            </div>
          </div>

          <div className="services-section">
            <h2>What we do</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏗️</div>
                <h3>Custom Model Making</h3>
                <p>Bespoke architectural models crafted from your designs—AutoCAD, SketchUp, or detailed briefs.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">✂️</div>
                <h3>Laser Cutting & Assembly</h3>
                <p>Precision laser cutting with CO2 cutter + expert assembly for structural integrity.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📐</div>
                <h3>Design Consultation</h3>
                <p>Technical guidance on scalability, materials, and presentation for your project.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'portfolio' && (
        <div className="page-container">
          <h2>Recent Projects</h2>
          <div className="portfolio-grid">
            {portfolio.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-image">{project.image}</div>
                <div className="portfolio-content">
                  <div className="portfolio-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <div className="portfolio-price">{project.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentPage === 'shop' && (
        <div className="page-container">
          <h2>Available Services</h2>
          <div className="shop-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-item">
                <h3>{service.name}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-details">
                  <div>
                    <div className="detail-label">Timeline</div>
                    <div className="detail-value">{service.time}</div>
                  </div>
                  <div>
                    <div className="detail-label">Starting at</div>
                    <div className="detail-price">{service.price}</div>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={addToCart} style={{ width: '100%' }}>Add to Inquiry</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="page-container contact-container">
          <h2>Get in Touch</h2>
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Address</div>
                <div className="contact-value">Delhi, India</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value email-link">scalemodelstudio@gmail.com</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 98XXXXXX95</div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send us your project details</h3>
            {formSubmitted && <div className="success-message">✓ Email client opened. Complete your message and send it.</div>}
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Your name</label>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Project details</label>
                <textarea name="message" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Inquiry</button>
            </form>
          </div>
        </div>
      )}

      {currentPage === 'cart' && (
        <div className="page-container">
          <h2>Inquiry Cart</h2>
          {cartCount === 0 ? (
            <div className="empty-cart">
              <div style={{ fontSize: '48px', marginBottom: '1rem' }}>🛒</div>
              <p>No services added yet. Browse our services to get started.</p>
              <button className="btn btn-primary" onClick={() => setCurrentPage('shop')}>Go to Shop</button>
            </div>
          ) : (
            <div className="cart-content">
              <div className="cart-card">
                <p>You have <strong>{cartCount}</strong> service{cartCount !== 1 ? 's' : ''} in your inquiry.</p>
                <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>Complete Your Inquiry</button>
              </div>
            </div>
          )}
        </div>
      )}

      <footer className="footer">
        <p>© 2024 Scale Model Studio. All rights reserved.</p>
        <p>Crafting precision models since 2020 | Delhi, India</p>
      </footer>
    </div>
  );
}
