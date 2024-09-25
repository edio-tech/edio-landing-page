import './Footer.css';
import HomeLink from './HomeLink';
import LinkedInLink from './LinkedInLink';
import InstagramLink from './InstagramLink';
import TwitterLink from './TwitterLink';
import TikTokLink from './TikTokLink';
import { Link } from 'react-router-dom';

const Footer = () =>
{
    return (
        <div className="footer-container">
            <div className="links">
                <div className="info-links">
                    <div className="vertical-columns">
                        <div className="connect">
                            <div className="footer-title">
                                <h4>Contact</h4>
                                <div className="line"></div>
                            </div>
                            <div className="connect-links">
                                <a className="footer-link" href="mailto:contact@edio.cc">contact@edio.cc</a>
                                <a className="footer-link" href="mailto:support@edio.cc">support@edio.cc</a>
                            </div>
                        </div>
                        <div className="legal">
                            <div className="footer-title">
                                <h4>Company</h4>
                                <div className="line"></div>
                            </div>
                            <div className="legal-links">
                                <Link to="/terms" className="footer-link">Terms of Service</Link>
                                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="socials">
                        <LinkedInLink />
                        <InstagramLink />
                        <TwitterLink />
                        <TikTokLink />
                    </div> */}
                </div>
                <div className="logo-link">
                    <HomeLink width="5rem" font_size="var(--fs-h1)" font_colour="var(--clr-text-accent)" />
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024</p>
                <div className="v-line"></div>
                <p>All rights reserved</p>
                <div className="v-line"></div>
                <p>We are in beta</p>
            </div>
        </div>
    )
}
export default Footer;
