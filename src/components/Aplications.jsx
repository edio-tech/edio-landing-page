import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import useAuth from "../hooks/useAuth";

import '../styles/components/applications.css';

const Aplications = () =>
{
    const location = useLocation();
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();


    const handleLogoutClick = () => {
        Cookies.remove('jwtToken');
        setAuth({});
        navigate('/')
     }

    return (
        <nav className="aplications-container">
            <ul className="aplications-list">
                {
                    auth?.id ?
                    (
                        <>
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
                            <li className="aplications-list-item">
                                <button className="btn login-button" onClick={navigate('/login')}>Login</button>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}
export default Aplications;
