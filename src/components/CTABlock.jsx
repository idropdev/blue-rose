import Button from './Button';
import './CTABlock.css';

const CTABlock = ({
    title,
    subtitle,
    primaryCTA = { text: 'Book a Consultation', href: '/contact' },
    secondaryCTA,
    variant = 'default',
    backgroundImage
}) => {
    return (
        <section className={`cta-block cta-block--${variant}`} style={
            backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
        }>
            {backgroundImage && <div className="cta-block__overlay" />}
            <div className="container">
                <div className="cta-block__content">
                    <h2 className="cta-block__title">{title}</h2>
                    {subtitle && <p className="cta-block__subtitle">{subtitle}</p>}
                    <div className="cta-block__actions">
                        <Button
                            href={primaryCTA.href}
                            variant="primary"
                            size="large"
                        >
                            {primaryCTA.text}
                        </Button>
                        {secondaryCTA && (
                            <Button
                                href={secondaryCTA.href}
                                variant={variant === 'dark' ? 'outline-light' : 'secondary'}
                                size="large"
                            >
                                {secondaryCTA.text}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABlock;
