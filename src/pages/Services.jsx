import { useEffect } from 'react';
import Button from '../components/Button';
import CTABlock from '../components/CTABlock';
import './Services.css';

const Services = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const serviceCategories = [
        {
            id: 'injectables',
            icon: '💉',
            title: 'Injectables',
            tagline: 'Refresh, Restore, Rejuvenate',
            description: 'Our injectable treatments are designed to smooth wrinkles, restore volume, and enhance your natural features. Administered by expert practitioners for natural-looking results.',
            services: [
                {
                    name: 'Botox & Dysport',
                    description: 'Smooth fine lines and wrinkles with precision neuromodulator treatments.',
                    benefits: ['Reduces crow\'s feet', 'Softens forehead lines', 'Prevents new wrinkles'],
                    duration: '15-30 min',
                    results: '3-4 months'
                },
                {
                    name: 'Dermal Fillers',
                    description: 'Restore youthful volume and contour with premium hyaluronic acid fillers.',
                    benefits: ['Plumps cheeks', 'Smooths nasolabial folds', 'Enhances jawline'],
                    duration: '30-60 min',
                    results: '12-18 months'
                },
                {
                    name: 'Lip Enhancement',
                    description: 'Achieve perfectly balanced, natural-looking lips tailored to your face.',
                    benefits: ['Adds volume', 'Defines lip border', 'Balances asymmetry'],
                    duration: '30 min',
                    results: '6-12 months'
                }
            ]
        },
        {
            id: 'hydration',
            icon: '💧',
            title: 'IV Hydration Therapy',
            tagline: 'Revitalize from Within',
            description: 'Experience the power of direct-to-bloodstream vitamins, minerals, and hydration. Our customized IV drips are designed for optimal absorption and immediate results.',
            services: [
                {
                    name: 'Energy Boost',
                    description: 'Combat fatigue with our energizing blend of B vitamins and amino acids.',
                    benefits: ['Increased energy', 'Mental clarity', 'Reduced fatigue'],
                    duration: '45-60 min',
                    results: 'Immediate'
                },
                {
                    name: 'Immunity Support',
                    description: 'Strengthen your immune system with high-dose vitamin C and zinc.',
                    benefits: ['Immune support', 'Faster recovery', 'Illness prevention'],
                    duration: '45-60 min',
                    results: 'Immediate'
                },
                {
                    name: 'Beauty Drip',
                    description: 'Glow from the inside out with biotin, glutathione, and antioxidants.',
                    benefits: ['Radiant skin', 'Stronger hair/nails', 'Anti-aging'],
                    duration: '45-60 min',
                    results: 'Immediate'
                }
            ]
        },
        {
            id: 'weight',
            icon: '⚖️',
            title: 'Weight Management',
            tagline: 'Your Health, Your Goals',
            description: 'Medically-supervised weight loss programs tailored to your unique body and goals. We combine cutting-edge treatments with personalized support for lasting results.',
            services: [
                {
                    name: 'Semaglutide Program',
                    description: 'FDA-approved medication for sustainable, significant weight loss.',
                    benefits: ['Appetite control', 'Sustainable loss', 'Medical supervision'],
                    duration: 'Ongoing',
                    results: '15-20% body weight'
                },
                {
                    name: 'Lipotropic Injections',
                    description: 'Fat-burning injections to boost metabolism and energy levels.',
                    benefits: ['Metabolism boost', 'Fat burning', 'Energy increase'],
                    duration: 'Weekly',
                    results: '4-6 weeks'
                },
                {
                    name: 'B12 Shots',
                    description: 'Essential vitamin injections to support energy and metabolism.',
                    benefits: ['Energy boost', 'Supports metabolism', 'Mood enhancement'],
                    duration: '5 min',
                    results: 'Immediate'
                }
            ]
        },
        {
            id: 'wellness',
            icon: '🌸',
            title: 'Wellness Services',
            tagline: 'Comprehensive Care',
            description: 'Our holistic approach to wellness addresses your complete health picture. From hormone optimization to vitamin therapy, we help you feel your best at every age.',
            services: [
                {
                    name: 'Hormone Therapy',
                    description: 'Restore balance with bioidentical hormone replacement therapy.',
                    benefits: ['Balanced hormones', 'Improved mood', 'Better sleep'],
                    duration: 'Consultation',
                    results: '4-6 weeks'
                },
                {
                    name: 'Vitamin Therapy',
                    description: 'Targeted vitamin injections for specific health goals.',
                    benefits: ['Customized dosing', 'Optimal absorption', 'Quick results'],
                    duration: '5-15 min',
                    results: 'Varies'
                },
                {
                    name: 'Health Optimization',
                    description: 'Comprehensive wellness plans for your best self.',
                    benefits: ['Full assessment', 'Personalized plan', 'Ongoing support'],
                    duration: 'Consultation',
                    results: 'Ongoing'
                }
            ]
        }
    ];

    return (
        <main className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero__background"></div>
                <div className="container">
                    <div className="services-hero__content">
                        <span className="hero-badge fade-in">Our Services</span>
                        <h1 className="fade-in">Transformative Treatments</h1>
                        <p className="fade-in">
                            Discover our comprehensive range of aesthetic and wellness services,
                            each designed to enhance your natural beauty and well-being.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Nav */}
            <section className="services-nav">
                <div className="container">
                    <div className="services-nav__grid">
                        {serviceCategories.map((category) => (
                            <a
                                key={category.id}
                                href={`#${category.id}`}
                                className="services-nav__item fade-in"
                            >
                                <span className="nav-icon">{category.icon}</span>
                                <span className="nav-label">{category.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Categories */}
            {serviceCategories.map((category, catIndex) => (
                <section
                    key={category.id}
                    id={category.id}
                    className={`service-category ${catIndex % 2 === 1 ? 'service-category--alt' : ''}`}
                >
                    <div className="container">
                        <div className="category-header">
                            <span className="category-icon fade-in">{category.icon}</span>
                            <h2 className="fade-in">{category.title}</h2>
                            <p className="category-tagline fade-in">{category.tagline}</p>
                            <div className="divider"></div>
                            <p className="category-description fade-in">{category.description}</p>
                        </div>

                        <div className="services-list">
                            {category.services.map((service, index) => (
                                <div
                                    key={index}
                                    className="service-item fade-in"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="service-item__content">
                                        <h3>{service.name}</h3>
                                        <p>{service.description}</p>
                                        <ul className="service-benefits">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="service-item__meta">
                                        <div className="meta-item">
                                            <span className="meta-label">Duration</span>
                                            <span className="meta-value">{service.duration}</span>
                                        </div>
                                        <div className="meta-item">
                                            <span className="meta-label">Results</span>
                                            <span className="meta-value">{service.results}</span>
                                        </div>
                                        <Button href="/contact" variant="primary" size="small">
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Pricing Note */}
            <section className="pricing-note">
                <div className="container">
                    <div className="pricing-note__content fade-in">
                        <h3>Personalized Pricing</h3>
                        <p>
                            Every treatment plan is customized to your unique needs and goals.
                            Schedule a complimentary consultation to discuss your options and receive
                            a personalized quote.
                        </p>
                        <Button href="/contact" variant="primary" size="large">
                            Get Your Custom Quote
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABlock
                title="Ready to Get Started?"
                subtitle="Book your complimentary consultation and let us create a personalized treatment plan just for you."
                primaryCTA={{ text: 'Book Consultation', href: '/contact' }}
                secondaryCTA={{ text: 'Call (915) 555-1234', href: 'tel:+19155551234' }}
                variant="dark"
            />
        </main>
    );
};

export default Services;
