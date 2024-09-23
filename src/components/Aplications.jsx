import { Link, useLocation } from "react-router-dom";

const Aplications = () =>
{
    const location = useLocation();

    return (
        <nav className="aplications-container">
            <ul className="aplications-list">
                <li className="aplications-list-item">
                    <Link to="/for-creators" onClick={() => localStorage.setItem('application', 'for-creators')} className={`aplications-list-item-link ${location.pathname === '/for-creators' ? 'aplications-list-item-link-active' : ''}`}>for creators</Link>
                </li>
                <li className="aplications-list-item">
                    <Link to="/for-educators" onClick={() => localStorage.setItem('application', 'for-educators')} className={`aplications-list-item-link ${location.pathname === '/for-educators' ? 'aplications-list-item-link-active' : ''}`}>for educators</Link>
                </li>
                <li className="aplications-list-item">
                    <Link to="/for-enterprise" onClick={() => localStorage.setItem('application', 'for-enterprise')} className={`aplications-list-item-link ${location.pathname === '/for-enterprise' ? 'aplications-list-item-link-active' : ''}`}>for enterprise</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Aplications;
