import './ServiceCard.css';
import Button from './Button';

const ServiceCard = ({
    icon,
    title,
    description,
    features = [],
    link = '/services',
    delay = 0
}) => {
    return (
        <div
            className="service-card fade-in"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="service-card__icon">
                {icon}
            </div>
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__description">{description}</p>
            {features.length > 0 && (
                <ul className="service-card__features">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}
            <Button href={link} variant="ghost" size="small">
                Learn More
            </Button>
        </div>
    );
};

export default ServiceCard;
