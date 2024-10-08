import { useEffect, useState } from 'react';

import './Header.css';
import HomeLink from './HomeLink';
import Aplications from './Aplications';

const Header = () =>
{
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    const controlHeader = () =>
    {
        if (typeof window !== 'undefined')
        {
            if (window.scrollY > lastScrollY)
            {
                // If we are scrolling down, hide the header
                setShowHeader(false);
            } else {
                // If we are scrolling up, show the header
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY); // Update the last scroll position
        }
    };

    useEffect(() =>
    {
        if (typeof window !== 'undefined')
        {
            window.addEventListener("scroll", controlHeader); // Add scroll listener

            return () =>
            {
                window.removeEventListener("scroll", controlHeader); // Cleanup listener
            };
        }
    }, [lastScrollY]);

    useEffect(() =>
    {
        const handleResize = () =>
        {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () =>
        {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={`header-container ${showHeader ? 'header-visible' : 'header-hidden'}`}>
            <HomeLink 
                width={isDesktop ? "2.75rem" : "2rem"} 
                fontSize="var(--fs-header)" 
                font_colour="var(--clr-text)" 
            />
            <Aplications />
        </header>
    )
}
export default Header;
