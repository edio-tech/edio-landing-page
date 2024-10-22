import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import useAuth from "../hooks/useAuth";

import '../styles/components/applications.css';

const Aplications = () =>
{
    const location = useLocation();
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);

    const handleLogoutClick = () => {
        Cookies.remove('jwtToken');
        setAuth({});
        navigate('/')
    }

    // Currently just have it set so that the login button dissapears on mobile
    // as the creator-ui doesnt work on mobile anyway.
    useEffect(() =>
    {
        // Function to check screen width
        const handleResize = () => {
            if (window.innerWidth <= 444) {
            setIsMobile(true); // Mobile view
            } else {
            setIsMobile(false); // Desktop view
            }
        };

        // Add event listener to handle screen resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="aplications-container">
            <ul className="aplications-list">
                {
                    auth?.id ?
                    (
                        <>
                        {
                            auth?.role === 'ADMIN' &&
                            (
                                <li className="aplications-list-item">
                                    <Link to="/select-creator" className={`aplications-list-item-link ${location.pathname === '/select-creator' ? 'aplications-list-item-link-active' : ''}`}>Creators</Link>
                                </li>
                            )
                        }
                        <li className="aplications-list-item">
                            <button className="btn login-button" onClick={handleLogoutClick}>Logout</button>
                        </li>
                        </>
                    ) : (
                        <>
                            <li className="aplications-list-item">
                                <Link to="/for-creators" onClick={() => localStorage.setItem('application', 'for-creators')} className={`aplications-list-item-link ${location.pathname === '/for-creators' ? 'aplications-list-item-link-active' : ''}`}>for creators</Link>
                            </li>
                            <li className="aplications-list-item">
                                <Link to="/for-educators" onClick={() => localStorage.setItem('application', 'for-educators')} className={`aplications-list-item-link ${location.pathname === '/for-educators' ? 'aplications-list-item-link-active' : ''}`}>for educators</Link>
                            </li>
                            <li className="aplications-list-item">
                                <Link to="/for-enterprise" onClick={() => localStorage.setItem('application', 'for-enterprise')} className={`aplications-list-item-link ${location.pathname === '/for-enterprise' ? 'aplications-list-item-link-active' : ''}`}>for enterprise</Link>
                            </li>
                            {
                                !isMobile &&
                                (
                                    <li className="aplications-list-item">
                                        <button className="btn login-button" onClick={() => navigate('/login')}>Login</button>
                                    </li>
                                )
                            }
                        </>
                    )
                }
            </ul>
        </nav>
    )
}
export default Aplications;
