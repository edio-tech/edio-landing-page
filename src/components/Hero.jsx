import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = ({ title, highlight, description, animation, call_to_action }) =>
{
    const [showDescription, setShowDescription] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showUnderline, setShowUnderline] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef(null);

    useEffect(() =>
    {
        setTimeout(() =>
        {
            setVideoReady(true);
        }, 200);
    }, []);

    useEffect(() =>
    {
        if (videoReady)
        {
            setShowDescription(true);
            setShowButton(true);
            setShowUnderline(true);
        }
    }, [videoReady]);

    const renderTitle = () =>
    {
        const parts = title.split(highlight);
        // const beforeHighlight = displayedTitle.slice(0, parts[0].length);
        // const highlightPart = displayedTitle.slice(parts[0].length, parts[0].length + highlight.length);
        // const afterHighlight = displayedTitle.slice(parts[0].length + highlight.length);

        return (
            <>
                {parts[0]}
                <span className={`highlight-word ${showUnderline ? 'show-underline' : ''}`}>
                    {highlight}
                </span>
                {parts[1]}
            </>
        );
    };

    return (
        <div className={`hero-container ${videoReady ? '' : 'hero-height'}`}>
            <div className="animation-container" style={{ opacity: videoReady ? 1 : 0 }}>
                <video 
                    ref={videoRef}
                    id="hero-video" 
                    muted 
                    loop 
                    playsInline 
                    className='hero-video' 
                    src={animation}
                    autoPlay
                />
            </div>
            <div className="text-container" style={{ opacity: videoReady ? 1 : 0 }}>
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
