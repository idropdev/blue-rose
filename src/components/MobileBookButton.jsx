import { Link } from 'react-router-dom';
import './MobileBookButton.css';

const MobileBookButton = () => {
    return (
        <Link to="/contact" className="mobile-book-btn">
            <span className="mobile-book-btn__icon">📅</span>
            <span className="mobile-book-btn__text">Book Now</span>
        </Link>
    );
};

export default MobileBookButton;
