import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useHeaderShown from "../hooks/useHeaderShown";

const Layout = ({ children }) =>
{
    const { headerShown } = useHeaderShown();

    return (
        <div>
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
