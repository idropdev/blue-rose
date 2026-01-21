import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTABlock from '../components/CTABlock';
import './Home.css';

const Home = () => {
    useEffect(() => {
        // Scroll animation observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            icon: '💉',
            title: 'Injectables',
            description: 'Refresh your look with expert Botox, fillers, and aesthetic treatments that enhance your natural beauty.',
            features: ['Botox & Dysport', 'Dermal Fillers', 'Lip Enhancement']
        },
        {
            icon: '💧',
            title: 'IV Hydration',
            description: 'Revitalize from within with customized IV therapy treatments designed for optimal wellness.',
            features: ['Energy Boost', 'Immunity Support', 'Beauty Drips']
        },
        {
            icon: '⚖️',
            title: 'Weight Management',
            description: 'Achieve your wellness goals with medically-supervised weight loss programs tailored to you.',
            features: ['Semaglutide', 'B12 Injections', 'Custom Plans']
        },
        {
            icon: '✨',
            title: 'Skin Rejuvenation',
            description: 'Transform your skin with advanced treatments that restore youthful radiance and glow.',
            features: ['Chemical Peels', 'Microneedling', 'Facials']
        },
        {
            icon: '🌸',
            title: 'Wellness',
            description: 'Comprehensive wellness services designed to help you look and feel your absolute best.',
            features: ['Hormone Therapy', 'Vitamin Shots', 'Health Optimization']
        },
        {
            icon: '💎',
            title: 'Premium Care',
            description: 'Exclusive treatments and personalized care packages for the ultimate aesthetic experience.',
            features: ['VIP Packages', 'Membership Plans', 'Concierge Service']
        }
    ];

    const testimonials = [
        {
            quote: "Blue Rose transformed my confidence. The staff is incredibly professional, and the results exceeded my expectations. I finally feel like myself again!",
            author: "Maria S.",
            service: "Botox & Fillers",
            rating: 5
        },
        {
            quote: "The IV hydration therapy gave me the energy boost I desperately needed. The atmosphere is so relaxing and luxurious. Highly recommend!",
            author: "Jennifer L.",
            service: "IV Hydration",
            rating: 5
        },
        {
            quote: "I've tried many places, but Blue Rose is truly exceptional. Their personalized approach to weight management actually works. Down 30 lbs!",
            author: "Amanda R.",
            service: "Weight Management",
            rating: 5
        }
    ];

    const whyChoose = [
        {
            icon: '🏆',
            title: 'Expert Practitioners',
            description: 'Board-certified professionals with years of experience in aesthetic medicine.'
        },
        {
            icon: '🌟',
            title: 'Premium Experience',
            description: 'A luxurious, spa-like environment designed for your comfort and relaxation.'
        },
        {
            icon: '💝',
            title: 'Personalized Care',
            description: 'Customized treatment plans tailored to your unique goals and concerns.'
        },
        {
            icon: '✅',
            title: 'Proven Results',
            description: 'Thousands of satisfied clients with natural-looking, confidence-boosting outcomes.'
        }
    ];

    return (
        <main className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__background">
                    <div className="hero__gradient"></div>
                    <div className="hero__shapes">
                        <div className="shape shape--1"></div>
                        <div className="shape shape--2"></div>
                        <div className="shape shape--3"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="hero__content">
                        <span className="hero__badge fade-in">✿ Welcome to Blue Rose</span>
                        <h1 className="hero__title fade-in">
                            Elevate Your <span className="highlight">Natural Beauty</span>
                        </h1>
                        <p className="hero__subtitle fade-in">
                            Experience premium aesthetic treatments and wellness services in El Paso's
                            most luxurious med spa. Discover the confident, radiant you.
                        </p>
                        <div className="hero__ctas fade-in">
                            <Button href="/contact" variant="primary" size="large">
                                Book a Consultation
                            </Button>
                            <Button href="/services" variant="secondary" size="large">
                                View Services
                            </Button>
                        </div>
                        <div className="hero__trust fade-in">
                            <div className="trust-item">
                                <span className="trust-number">5,000+</span>
                                <span className="trust-label">Happy Clients</span>
                            </div>
                            <div className="trust-divider"></div>
                            <div className="trust-item">
                                <span className="trust-number">4.9★</span>
                                <span className="trust-label">Google Rating</span>
                            </div>
                            <div className="trust-divider"></div>
                            <div className="trust-item">
                                <span className="trust-number">10+</span>
                                <span className="trust-label">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section" id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge fade-in">Our Services</span>
                        <h2 className="fade-in">Transformative Treatments</h2>
                        <div className="divider"></div>
                        <p className="fade-in">
                            Discover our comprehensive range of aesthetic and wellness services
                            designed to help you look and feel your absolute best.
                        </p>
                    </div>
                    <div className="grid grid-3 services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                    <div className="services-cta fade-in">
                        <Button href="/services" variant="secondary" size="large">
                            Explore All Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section section--light why-section">
                <div className="container">
                    <div className="why-grid">
                        <div className="why-content">
                            <span className="section-badge fade-in">Why Blue Rose</span>
                            <h2 className="fade-in">Where Expertise Meets Elegance</h2>
                            <div className="divider divider--left"></div>
                            <p className="fade-in">
                                At Blue Rose Aesthetics & Wellness, we believe everyone deserves to feel
                                confident in their own skin. Our patient-first approach combines medical
                                expertise with personalized care in a serene, luxurious environment.
                            </p>
                            <div className="why-features">
                                {whyChoose.map((item, index) => (
                                    <div key={index} className="why-feature fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
                                        <span className="why-feature__icon">{item.icon}</span>
                                        <div className="why-feature__content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button href="/about" variant="ghost" className="fade-in">
                                Learn More About Us
                            </Button>
                        </div>
                        <div className="why-image fade-in">
                            <div className="image-frame">
                                <div className="image-placeholder">
                                    <span>✿</span>
                                    <p>Luxury Med Spa Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Block */}
            <CTABlock
                title="Ready to Start Your Transformation?"
                subtitle="Book your complimentary consultation today and discover the treatments that are right for you."
                primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
                secondaryCTA={{ text: 'Call (915) 555-1234', href: 'tel:+19155551234' }}
                variant="dark"
            />

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge fade-in">Testimonials</span>
                        <h2 className="fade-in">What Our Clients Say</h2>
                        <div className="divider"></div>
                        <p className="fade-in">
                            Real stories from real clients who have experienced the Blue Rose difference.
                        </p>
                    </div>
                    <div className="grid grid-3 testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                quote={testimonial.quote}
                                author={testimonial.author}
                                service={testimonial.service}
                                rating={testimonial.rating}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="section section--blue location-section">
                <div className="container">
                    <div className="location-grid">
                        <div className="location-content fade-in">
                            <span className="section-badge">Visit Us</span>
                            <h2>Located in the Heart of El Paso</h2>
                            <div className="divider divider--left"></div>
                            <p>
                                Conveniently located with ample parking and a welcoming atmosphere.
                                We can't wait to meet you!
                            </p>
                            <div className="location-details">
                                <div className="location-item">
                                    <span className="location-icon">📍</span>
                                    <div>
                                        <strong>Address</strong>
                                        <p>1234 Luxury Lane, El Paso, TX 79901</p>
                                    </div>
                                </div>
                                <div className="location-item">
                                    <span className="location-icon">🕐</span>
                                    <div>
                                        <strong>Hours</strong>
                                        <p>Mon-Fri: 9am-6pm | Sat: 10am-4pm</p>
                                    </div>
                                </div>
                                <div className="location-item">
                                    <span className="location-icon">📞</span>
                                    <div>
                                        <strong>Contact</strong>
                                        <p>(915) 555-1234</p>
                                    </div>
                                </div>
                            </div>
                            <div className="location-ctas">
                                <Button href="/contact" variant="primary">
                                    Book Appointment
                                </Button>
                                <Button href="tel:+19155551234" variant="secondary">
                                    Call Now
                                </Button>
                            </div>
                        </div>
                        <div className="location-map fade-in">
                            <div className="map-placeholder">
                                <span>🗺️</span>
                                <p>Map Location</p>
                                <small>El Paso, TX</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTABlock
                title="Your Journey to Confidence Starts Here"
                subtitle="Take the first step toward looking and feeling your best. Our team is ready to create your personalized treatment plan."
                primaryCTA={{ text: 'Start Your Journey', href: '/contact' }}
                variant="rose"
            />
        </main>
    );
};

export default Home;
