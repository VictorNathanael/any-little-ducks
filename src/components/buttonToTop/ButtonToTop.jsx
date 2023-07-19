import React, { useState, useEffect } from 'react';
import './ButtonToTop.css';

export default function ButtonToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = window.innerHeight;

            setShowButton(scrollTop > windowHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`scroll-to-top-button ${showButton ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            ^
        </button>
    );
}
