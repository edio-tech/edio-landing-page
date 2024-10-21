import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useHeaderShown from "../hooks/useHeaderShown";
import useFooterShown from "../hooks/useFooterShown";
import ScrollToTop from "../context/ScrollToTop";

const Layout = ({ children }) =>
{
    const { headerShown } = useHeaderShown();
    const { footerShown } = useFooterShown();


    return (
        <div>
            <ScrollToTop />
            {headerShown && <Header />}
            <main style={{ paddingTop: headerShown ? '5rem' : '0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Outlet />
                {children}
            </main>
            {footerShown && <Footer />}
        </div>
    )
}
export default Layout;
