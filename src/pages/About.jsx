import { useEffect } from 'react';
import Button from '../components/Button';
import CTABlock from '../components/CTABlock';
import './About.css';

const About = () => {
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

    const values = [
        {
            icon: '💝',
            title: 'Patient-First Care',
            description: 'Every treatment plan is personalized to your unique needs, goals, and comfort level. Your well-being is always our top priority.'
        },
        {
            icon: '🎯',
            title: 'Excellence & Expertise',
            description: 'Our team stays at the forefront of aesthetic medicine, continuously training in the latest techniques and technologies.'
        },
        {
            icon: '🤝',
            title: 'Trust & Transparency',
            description: 'We believe in honest conversations about realistic outcomes. No pressure, just guidance to help you make informed decisions.'
        },
        {
            icon: '✨',
            title: 'Natural Results',
            description: 'We enhance your natural beauty, not change who you are. Subtle, refined results that make you look refreshed, not "done."'
        }
    ];

    const team = [
        {
            name: 'Dr. Sarah Mitchell',
            title: 'Medical Director',
            credentials: 'MD, Board Certified',
            description: 'With over 15 years in aesthetic medicine, Dr. Mitchell leads our team with expertise and compassion.',
            initial: 'SM'
        },
        {
            name: 'Jessica Rodriguez',
            title: 'Lead Aesthetic Nurse',
            credentials: 'RN, ANP-C',
            description: 'Specializing in injectables and skin rejuvenation, Jessica brings artistry to every treatment.',
            initial: 'JR'
        },
        {
            name: 'Amanda Chen',
            title: 'Wellness Coordinator',
            credentials: 'NP, ABAAHP',
            description: 'Amanda focuses on holistic wellness, helping patients achieve optimal health inside and out.',
            initial: 'AC'
        }
    ];

    return (
        <main className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero__background"></div>
                <div className="container">
                    <div className="about-hero__content">
                        <span className="hero-badge fade-in">About Us</span>
                        <h1 className="fade-in">
                            Where Beauty Meets <span className="highlight">Wellness</span>
                        </h1>
                        <p className="fade-in">
                            At Blue Rose Aesthetics & Wellness, we believe everyone deserves
                            to feel confident and beautiful in their own skin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <span className="section-badge fade-in">Our Story</span>
                            <h2 className="fade-in">A Legacy of Care in El Paso</h2>
                            <div className="divider divider--left"></div>
                            <p className="fade-in">
                                Founded with a vision to bring luxury aesthetic care to the El Paso community,
                                Blue Rose Aesthetics & Wellness has grown from a small practice into a trusted
                                destination for those seeking to enhance their natural beauty.
                            </p>
                            <p className="fade-in">
                                Our name reflects our philosophy — the blue rose symbolizes the extraordinary
                                and unattainable made possible. We believe that with the right care, expertise,
                                and personalized attention, achieving your aesthetic goals is within reach.
                            </p>
                            <p className="fade-in">
                                Today, we're proud to serve thousands of patients who trust us with their
                                aesthetic and wellness journeys. Our commitment to excellence, safety, and
                                patient satisfaction remains at the heart of everything we do.
                            </p>
                        </div>
                        <div className="story-image fade-in">
                            <div className="image-frame">
                                <div className="image-placeholder">
                                    <span>✿</span>
                                    <p>Our Welcoming Space</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section section--rose mission-section">
                <div className="container">
                    <div className="mission-content">
                        <span className="section-badge fade-in">Our Mission</span>
                        <h2 className="fade-in">"To empower our patients to feel confident and beautiful through personalized, expert aesthetic care delivered with warmth and integrity."</h2>
                        <div className="divider"></div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge fade-in">Our Values</span>
                        <h2 className="fade-in">What We Stand For</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="value-card fade-in"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <span className="value-icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section section--light team-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge fade-in">Our Team</span>
                        <h2 className="fade-in">Meet the Experts</h2>
                        <div className="divider"></div>
                        <p className="fade-in">
                            Our skilled team of medical professionals combines expertise
                            with artistry to deliver exceptional results.
                        </p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="team-card fade-in"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="team-card__avatar">
                                    {member.initial}
                                </div>
                                <div className="team-card__content">
                                    <h3>{member.name}</h3>
                                    <span className="team-title">{member.title}</span>
                                    <span className="team-credentials">{member.credentials}</span>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="section credentials-section">
                <div className="container">
                    <div className="credentials-grid">
                        <div className="credential-item fade-in">
                            <span className="credential-icon">🏥</span>
                            <div>
                                <h4>Board Certified</h4>
                                <p>All treatments overseen by certified medical professionals</p>
                            </div>
                        </div>
                        <div className="credential-item fade-in">
                            <span className="credential-icon">💎</span>
                            <div>
                                <h4>Premium Products</h4>
                                <p>Only FDA-approved, medical-grade products and treatments</p>
                            </div>
                        </div>
                        <div className="credential-item fade-in">
                            <span className="credential-icon">🏆</span>
                            <div>
                                <h4>Award Winning</h4>
                                <p>Recognized as a top aesthetic provider in El Paso</p>
                            </div>
                        </div>
                        <div className="credential-item fade-in">
                            <span className="credential-icon">📋</span>
                            <div>
                                <h4>Fully Licensed</h4>
                                <p>Texas licensed medical facility with strict safety protocols</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABlock
                title="Ready to Experience the Difference?"
                subtitle="Schedule a consultation and discover how our personalized approach can help you achieve your aesthetic goals."
                primaryCTA={{ text: 'Book Your Consultation', href: '/contact' }}
                secondaryCTA={{ text: 'Explore Services', href: '/services' }}
                variant="dark"
            />
        </main>
    );
};

export default About;
