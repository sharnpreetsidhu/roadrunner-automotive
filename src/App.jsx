import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gallerySlideIndex, setGallerySlideIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 650);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    'Diagnostics & Troubleshooting',
    'Brake Service',
    'Oil Changes & Maintenance',
    'Suspension & Steering',
    'Engine Repair',
    'General Auto Repair',
  ];

  const galleryImages = [
    '/images/audi.jpg',
    '/images/benz.jpg',
    '/images/gt500.png',
    '/images/mustang.jpg',
    '/images/porsche-1.jpg',
    '/images/porsche-2.jpg',
    '/images/porsche-3.png',
    '/images/s580.png',
    '/images/classic.png',
    '/images/tesla.png',
    '/images/bmw.png',
    '/images/c63.png',
    '/images/etron.png',
    '/images/cultas.png',
  ];

  const showNextGallerySlide = () => {
    setGallerySlideIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  const showPreviousGallerySlide = () => {
    setGallerySlideIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
  const timer = setInterval(() => {
    setGallerySlideIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  }, 3500);

  return () => clearInterval(timer);
}, [galleryImages.length]);


  const reviews = [
    {
      name: 'Sharnpreet Sidhu',
      role: 'Local Guide · 12 reviews',
      text: 'Roadrunner Automotive stands as a reliable go-to for all automotive needs. Roadrunner truly delivers, offering a comprehensive range of services that cater to every aspect of vehicle maintenance and repair. The team’s attention to detail and dedication to quality workmanship assure that each car is treated with the utmost care.',
    },
    {
      name: 'Nick Lal',
      role: 'Local Guide · 63 reviews · 4 photos',
      text: 'As a busy real estate professional, my schedule is constantly packed and I rely heavily on my vehicle. Finding a mechanic who is both quick and trustworthy is essential, and the team at Roadrunner Automotive exceeded my expectations. They respected my time, provided clear communication, and got me back on the road faster than I anticipated.',
    },
    {
      name: 'Vick Raj',
      role: '7 reviews · 8 photos',
      text: 'I had a great experience at Road Runner Automotive Repair! The staff is knowledgeable, honest, and very professional. They diagnosed the issue quickly, explained everything clearly, and got the repairs done on time. Pricing was fair and there were no surprise charges.',
    },
    {
      name: 'Kaizen',
      role: '7 reviews · 5 photos',
      text: 'Would absolutely recommend Roadrunner! Brought my 2000 CRV in with my front end completely trashed. They fixed my vehicle within 2 days of phoning them and now it drives better than ever!',
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
     {loading && (
  <div className="loading-screen">
    <img
      src="/images/audi.jpg"
      alt="Roadrunner Automotive loading background"
      className="loading-image"
    />

    <div className="loading-overlay"></div>

    <div className="loading-content">
      <img
        src="/images/roadrunner-logo.png"
        alt="Roadrunner Automotive logo"
        className="loading-logo"
      />

      <div className="loading-text-wrap">
        <p className="loading-kicker">Roadrunner Automotive</p>
        <h2>Precision service. Built for the road.</h2>
      </div>

      <div className="loading-line">
        <span></span>
      </div>
    </div>
  </div>
)}

      <main className={loading ? 'site-hidden' : 'site-visible'}>
        <section className="hero" id="top">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/videos/audi-r8.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay"></div>

          <nav className="nav">
            <a href="#top" className="logo logo-image-wrap" onClick={closeMenu}>
              <img
                src="/images/roadrunner-logo.png"
                alt="Roadrunner Automotive logo"
                className="site-logo"
              />
            </a>

            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
              <a
                href="https://www.instagram.com/roadrunner.automotive/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="insta-link"
              >
                Instagram
              </a>
            </div>

            <button
              className={`menu-btn ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>

          <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a
              href="https://www.instagram.com/roadrunner.automotive/?hl=en"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Instagram
            </a>
          </div>

          <div className="hero-content">
            <div className="hero-kicker reveal">
              Trusted Surrey Auto Repair Shop
            </div>

            <h1 className="reveal">
              Reliable auto repair with honest service.
            </h1>

            <p className="hero-subtext reveal">
              Roadrunner Automotive delivers reliable diagnostics, repairs, and
              maintenance with honest communication, quality workmanship, and a
              reputation built by local drivers.
            </p>

            <div className="hero-buttons reveal">
              <a href="tel:6045360133" className="btn primary">
                Call Now
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=2178+King+George+Blvd+Surrey+BC+V4A+5A2"
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                Get Directions
              </a>

              <a
                href="https://www.instagram.com/roadrunner.automotive/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                View Instagram
              </a>
            </div>

            <div className="hero-badges reveal">
              <div className="badge">
                <strong>4.9 ★★★★★</strong>
                <span>100+ Google Reviews</span>
              </div>

              <div className="badge">
                <strong>Mon–Fri</strong>
                <span>9:00 a.m. – 5:30 p.m.</span>
              </div>

              <div className="badge">
                <strong>Surrey, BC</strong>
                <span>2178 King George Blvd</span>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span></span>
            Scroll
          </div>
        </section>

        <section className="stats reveal">
          <div>
            <h2>100+</h2>
            <p>Google Reviews</p>
          </div>

          <div>
            <h2>4.9</h2>
            <p>Average Rating</p>
          </div>

          <div>
            <h2>Trusted</h2>
            <p>Surrey Auto Repair</p>
          </div>
        </section>

        <section className="section intro-section reveal">
          <div className="intro-card">
            <p className="eyebrow">Why Roadrunner</p>
            <h2>Built for customers who want the job done right.</h2>
          </div>

          <div className="intro-text">
            <p>
              From daily drivers to performance vehicles, Roadrunner Automotive
              gives customers a clean, professional, and trustworthy repair
              experience from the moment they call to the moment they drive away.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading reveal">
            <p>Our Services</p>
            <h2>Auto repair that feels professional from start to finish.</h2>
            <span>
              Clear communication, skilled diagnostics, and reliable repair work
              for customers who want confidence in their vehicle.
            </span>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <div
                className="service-card reveal"
                key={service}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="service-icon">⚙</div>
                <h3>{service}</h3>
                <p>
                  Professional service focused on quality, efficiency, fair
                  pricing, and getting customers safely back on the road.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="feature-video-section reveal">
          <div className="feature-video-wrap">
            <video className="feature-video" autoPlay muted loop playsInline>
              <source src="/videos/corvette.mp4" type="video/mp4" />
            </video>

            <div className="feature-video-overlay"></div>

            <div className="feature-video-content">
              <p className="eyebrow">Performance Meets Trust</p>
              <h2>From regular maintenance to serious repair work.</h2>
              <p>
                Roadrunner Automotive combines experience, attention to detail,
                and honest service to give customers confidence every time they
                bring their vehicle in.
              </p>

              <div className="mini-features">
                <div>
                  <strong>01</strong>
                  <span>Honest diagnostics</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Quality workmanship</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Trusted by locals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading reveal">
            <p>Gallery</p>
            <h2>Recent vehicles and shop work.</h2>
            <span>
              A clean look at the vehicles, repairs, and work handled by
              Roadrunner Automotive.
            </span>
          </div>

          <div className="gallery-showcase reveal">
            <button
              className="gallery-slide-arrow gallery-slide-prev"
              onClick={showPreviousGallerySlide}
              type="button"
              aria-label="Previous gallery image"
            >
              ‹
            </button>

            <div className="gallery-single-image">
              <img
                src={galleryImages[gallerySlideIndex]}
                alt="Roadrunner Automotive vehicle work"
              />
            </div>

            <button
              className="gallery-slide-arrow gallery-slide-next"
              onClick={showNextGallerySlide}
              type="button"
              aria-label="Next gallery image"
            >
              ›
            </button>

            <div className="gallery-slide-bottom">
              <span>{gallerySlideIndex + 1} / {galleryImages.length}</span>

              <div className="gallery-dots">
                {galleryImages.map((image, index) => (
                  <button
                    key={image}
                    className={gallerySlideIndex === index ? 'active' : ''}
                    onClick={() => setGallerySlideIndex(index)}
                    type="button"
                    aria-label={`Show gallery image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="section-heading reveal">
            <p>Customer Reviews</p>
            <h2>Rated 4.9 stars by local drivers.</h2>
            <span>
              Strong reviews help new customers trust the shop before they even
              make the call.
            </span>
          </div>

          <div className="review-grid">
            {reviews.map((review, index) => (
              <div
                className="review-card reveal"
                key={review.name}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="review-top">
                  <div className="review-avatar">{review.name.charAt(0)}</div>
                  <div>
                    <h3>{review.name}</h3>
                    <p className="review-role">{review.role}</p>
                  </div>
                </div>

                <div className="stars">★★★★★</div>
                <p className="review-text">“{review.text}”</p>
              </div>
            ))}
          </div>

          <a
            className="review-link reveal"
            href="https://www.google.com/search?q=Roadrunner+Automotive+Surrey+reviews"
            target="_blank"
            rel="noreferrer"
          >
            View More Google Reviews →
          </a>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-info reveal">
            <p className="eyebrow">Find Us</p>
            <h2>Visit Roadrunner Automotive</h2>

            <div className="info-card">
              <p>
                <strong>Address:</strong> 2178 King George Blvd, Surrey, BC V4A
                5A2
              </p>

              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:6045360133">(604) 536-0133</a>
              </p>

              <p>
                <strong>Hours:</strong> Monday–Friday, 9:00 a.m.–5:30 p.m.
              </p>

              <p>
                <strong>Province:</strong> British Columbia
              </p>

              <div className="contact-buttons">
                <a href="tel:6045360133" className="btn primary">
                  Call the Shop
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=2178+King+George+Blvd+Surrey+BC+V4A+5A2"
                  className="btn secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>

          <div className="map-card reveal">
            <iframe
              title="Roadrunner Automotive Location"
              src="https://www.google.com/maps?q=2178+King+George+Blvd,+Surrey,+BC+V4A+5A2&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <footer>
          <p>© 2026 Roadrunner Automotive. All rights reserved.</p>
          <p>Created by Pacific Tech Solutions</p>
        </footer>

        <a
          href="#top"
          className={`back-to-top ${showBackToTop ? 'show' : ''}`}
          aria-label="Back to top"
        >
          ↑
        </a>
      </main>
    </>
  );
}

export default App;