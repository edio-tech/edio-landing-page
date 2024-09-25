import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ title, highlight, description, animation, call_to_action }) => {
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [showDescription, setShowDescription] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showUnderline, setShowUnderline] = useState(false);

    useEffect(() =>
    {
        let currentIndex = 0;
        const typingInterval = setInterval(() =>
        {
            if (currentIndex < title.length)
            {
                setDisplayedTitle(title.slice(0, currentIndex + 1));
                currentIndex++;
            } else
            {
                clearInterval(typingInterval);
                // Typing finished, show description and button
                setTimeout(() => {
                    setShowDescription(true);
                    setShowButton(true);
                    // Show underline after a short delay
                    setShowUnderline(true);
                }, 500);
            }
        }, 100); // Adjust typing speed here

        return () => clearInterval(typingInterval);
    }, [title]);

    const renderTitle = () =>
    {
        const parts = title.split(highlight);
        const beforeHighlight = displayedTitle.slice(0, parts[0].length);
        const highlightPart = displayedTitle.slice(parts[0].length, parts[0].length + highlight.length);
        const afterHighlight = displayedTitle.slice(parts[0].length + highlight.length);

        return (
            <>
                {beforeHighlight}
                <span className={`highlight-word ${showUnderline ? 'show-underline' : ''}`}>
                    {highlightPart}
                </span>
                {afterHighlight}
            </>
        );
    };

    return (
        <div className="hero-container">
            <div className="animation-container">
                <div>Animation Placeholder</div>
            </div>
            <div className="text-container">
                <h1 className="hero-title">{renderTitle()}</h1>
                <p className={`hero-description ${showDescription ? 'show' : ''}`}>{description}</p>
                <a className={`btn hero-button alt-button ${showButton ? 'show' : ''}`} target="_blank" href="https://calendly.com/ross-edio/30min">
                    {call_to_action}
                </a>
            </div>
        </div>
    );
};

export default Hero;
