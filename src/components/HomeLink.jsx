import { Link } from 'react-router-dom';

import logo from '../assets/images/logo-edio.png';

const HomeLink = ({ width, font_size, font_colour }) =>
{
    return (
        <Link to="/" className="header-home-link">
            <img src={logo} className="header-home-link-logo" style={{ width: width }} alt="logo" />
            <span className="header-home-link-text" style={{ fontSize: font_size, color: font_colour }}>edio</span>
        </Link>
    )
}
export default HomeLink;
