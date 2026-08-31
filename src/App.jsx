import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [filter, setFilter] = useState('All');

  const portfolio = [
    { id: 1, title: 'Luxury Apartment Complex', category: 'Residential', scale: '1:100', price: '₹45,000' },
    { id: 2, title: 'Corporate Office Building', category: 'Commercial', scale: '1:100', price: '₹60,000' },
    { id: 3, title: 'Shopping Mall Design', category: 'Commercial', scale: '1:150', price: '₹75,000' },
    { id: 4, title: 'Mixed-Use Development', category: 'Residential', scale: '1:100', price: '₹85,000' },
    { id: 5, title: 'Institutional Building', category: 'Institutional', scale: '1:50', price: '₹55,000' },
    { id: 6, title: 'Hospitality Project', category: 'Commercial', scale: '1:100', price: '₹70,000' },
  ];

  const services = [
    { name: 'Residential Model', desc: 'Homes, apartments and townships built to scale, with landscaping and material accuracy.', price: '₹35,000', time: '15–20 days' },
    { name: 'Commercial Complex', desc: 'Office towers and business parks, showing massing, facades and site context.', price: '₹55,000', time: '20–25 days' },
    { name: 'Mixed-Use Project', desc: 'Retail and residential combined, presenting how the layers of a development connect.', price: '₹75,000', time: '25–30 days' },
    { name: 'Institutional Building', desc: 'Schools, campuses and civic buildings, detailed enough for approval presentations.', price: '₹65,000', time: '20–25 days' },
  ];

  const process = [
    { step: '01', title: 'Brief & drawings', desc: 'Send us your AutoCAD or SketchUp files, or a detailed brief. We confirm scale, materials and timeline.' },
    { step: '02', title: 'Digital layout', desc: 'We prepare cutting files and a material plan, and share a proof before anything is cut.' },
    { step: '03', title: 'Laser cutting', desc: 'Precision CO2 laser cutting of every component, from structural shells to facade detail.' },
    { step: '04', title: 'Assembly & finishing', desc: 'Hand assembly, painting and landscaping, checked against your original drawings.' },
    { step: '05', title: 'Delivery', desc: 'Packed and delivered ready for presentation, with care instructions for transport.' },
  ];

  const addToCart = () => setCartCount((c) => c + 1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name');
    const email = fd.get('email');
    const message = fd.get('message');
    const mailto = `mailto:scalemodelstudio@gmail.com?subject=Project Inquiry from ${name}&body=Name: ${name}%0DEmail: ${email}%0D%0DProject Details:%0D${message}`;
    window.location.href = mailto;
    e.target.reset();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const filteredPortfolio = filter === 'All' ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <div className="app">
      {/* Nav */}
      <nav className="navbar">
        <div className="navbar-inner">
          <button className="logo" onClick={() => setPage('home')}>
            Scale Model Studio
          </button>
          <div className="nav-links">
            {['home', 'portfolio', 'shop', 'contact'].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`nav-btn ${page === p ? 'active' : ''}`}
              >
                {p === 'home' ? 'Home' : p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
            <button className="cart-btn" onClick={() => setPage('cart')} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* HOME */}
      {page === 'home' && (
        <>
          <section className="hero">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1>Scale models that make a design decision easy to see</h1>
                <p>
                  We build precision architectural models for architects, developers and
                  institutions in Delhi — from first massing study to a finished
                  presentation piece, cut and assembled by hand.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-primary" onClick={() => setPage('portfolio')}>View portfolio</button>
                  <button className="btn btn-ghost" onClick={() => setPage('contact')}>Start a project</button>
                </div>
              </div>
              <div className="hero-art" aria-hidden="true">
                <svg viewBox="0 0 460 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="70" y="80" width="140" height="220" stroke="currentColor" strokeWidth="1.4" />
                  <rect x="210" y="40" width="110" height="260" stroke="currentColor" strokeWidth="1.4" />
                  <rect x="320" y="140" width="70" height="160" stroke="currentColor" strokeWidth="1.4" />
                  {Array.from({ length: 7 }).map((_, i) => (
                    <line key={`w1-${i}`} x1="90" y1={110 + i * 26} x2="115" y2={110 + i * 26} stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`w2-${i}`} x1="230" y1={70 + i * 26} x2="255" y2={70 + i * 26} stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  ))}
                  <line x1="70" y1="330" x2="390" y2="330" stroke="currentColor" strokeWidth="1" />
                  <line x1="70" y1="336" x2="70" y2="324" stroke="currentColor" strokeWidth="1" />
                  <line x1="390" y1="336" x2="390" y2="324" stroke="currentColor" strokeWidth="1" />
                  <text x="205" y="355" fill="currentColor" fontFamily="monospace" fontSize="12" textAnchor="middle" opacity="0.75">1 : 100</text>
                  <line x1="30" y1="80" x2="30" y2="300" stroke="currentColor" strokeWidth="1" />
                  <line x1="24" y1="80" x2="36" y2="80" stroke="currentColor" strokeWidth="1" />
                  <line x1="24" y1="300" x2="36" y2="300" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </section>

          <section className="stats">
            <div className="stats-inner">
              <div className="stat"><div className="stat-num">4+</div><div className="stat-label">Years building models</div></div>
              <div className="stat"><div className="stat-num">40+</div><div className="stat-label">Projects delivered</div></div>
              <div className="stat"><div className="stat-num">3</div><div className="stat-label">Sectors served — residential, commercial, institutional</div></div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">What we build</h2>
            <div className="services-row">
              <div className="service-block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>
                <h3>Custom model making</h3>
                <p>Built from your AutoCAD, SketchUp files or a detailed brief — massing, facade and landscape included.</p>
              </div>
              <div className="service-block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 9l6-6 6 6M6 15l6 6 6-6M12 3v18" /></svg>
                <h3>Laser cutting &amp; assembly</h3>
                <p>CO2 laser precision on every panel, hand-assembled for structural accuracy and a clean finish.</p>
              </div>
              <div className="service-block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 19h16M4 15l4-4 3 3 5-6 4 5" /></svg>
                <h3>Design consultation</h3>
                <p>Guidance on scale, materials and presentation format before a single cut is made.</p>
              </div>
            </div>
          </section>

          <section className="section section-dark">
            <h2 className="section-title">How a project moves</h2>
            <div className="process-list">
              {process.map((s) => (
                <div className="process-row" key={s.step}>
                  <div className="process-step">{s.step}</div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* PORTFOLIO */}
      {page === 'portfolio' && (
        <div className="page">
          <h2 className="section-title">Recent projects</h2>
          <div className="filter-row">
            {['All', 'Residential', 'Commercial', 'Institutional'].map((f) => (
              <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filteredPortfolio.map((p) => (
              <div className="portfolio-card" key={p.id}>
                <div className="portfolio-thumb">
                  <span className="portfolio-scale">{p.scale}</span>
                </div>
                <div className="portfolio-body">
                  <div className="portfolio-cat">{p.category}</div>
                  <h3>{p.title}</h3>
                  <div className="portfolio-price">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SHOP */}
      {page === 'shop' && (
        <div className="page">
          <h2 className="section-title">Available services</h2>
          <div className="shop-grid">
            {services.map((s, i) => (
              <div className="shop-card" key={i}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <div className="shop-meta">
                  <div><span className="meta-label">Timeline</span><span className="meta-val">{s.time}</span></div>
                  <div><span className="meta-label">Starting at</span><span className="meta-price">{s.price}</span></div>
                </div>
                <button className="btn btn-primary btn-block" onClick={addToCart}>Add to inquiry</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CONTACT */}
      {page === 'contact' && (
        <div className="page-dark">
          <div className="contact-wrap">
            <div className="contact-info">
              <h2 className="section-title">Get in touch</h2>
              <p className="contact-lead">Tell us about your project — scale, timeline and any drawings you already have.</p>
              <div className="contact-line"><span className="meta-label">Address</span>Delhi, India</div>
              <div className="contact-line"><span className="meta-label">Email</span>scalemodelstudio@gmail.com</div>
              <div className="contact-line"><span className="meta-label">Phone</span>+91 98XXXXXX95</div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              {formSubmitted && <div className="success-msg">Email client opened — complete your message and send it.</div>}
              <label>Your name<input type="text" name="name" required /></label>
              <label>Email<input type="email" name="email" required /></label>
              <label>Project details<textarea name="message" required /></label>
              <button type="submit" className="btn btn-primary btn-block">Send inquiry</button>
            </form>
          </div>
        </div>
      )}

      {/* CART */}
      {page === 'cart' && (
        <div className="page">
          <h2 className="section-title">Inquiry cart</h2>
          {cartCount === 0 ? (
            <div className="empty-cart">
              <p>No services added yet.</p>
              <button className="btn btn-primary" onClick={() => setPage('shop')}>Go to shop</button>
            </div>
          ) : (
            <div className="cart-card">
              <p>You have <strong>{cartCount}</strong> service{cartCount !== 1 ? 's' : ''} in your inquiry.</p>
              <button className="btn btn-primary" onClick={() => setPage('contact')}>Complete your inquiry</button>
            </div>
          )}
        </div>
      )}

      <footer className="footer">
        <p>© 2026 Scale Model Studio · Delhi, India</p>
      </footer>
    </div>
  );
}
