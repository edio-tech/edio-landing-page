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
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;
