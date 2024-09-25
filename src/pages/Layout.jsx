import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useHeaderShown from "../hooks/useHeaderShown";
import ScrollToTop from "../context/ScrollToTop";

const Layout = ({ children }) =>
{
    const { headerShown } = useHeaderShown();

    return (
        <div>
            <ScrollToTop />
            {headerShown && <Header />}
            <main>
                <Outlet />
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;
