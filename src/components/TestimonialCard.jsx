import './TestimonialCard.css';

const TestimonialCard = ({
    quote,
    author,
    service,
    rating = 5,
    delay = 0
}) => {
    return (
        <div
            className="testimonial-card fade-in"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="testimonial-card__rating">
                {[...Array(rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                ))}
            </div>
            <blockquote className="testimonial-card__quote">
                "{quote}"
            </blockquote>
            <div className="testimonial-card__author">
                <div className="author-avatar">
                    {author.charAt(0)}
                </div>
                <div className="author-info">
                    <span className="author-name">{author}</span>
                    {service && <span className="author-service">{service}</span>}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
