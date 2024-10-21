import { createContext, useState } from "react";

const FooterShownContext = createContext();

export const FooterShownProvider = ({ children }) =>
{
    const [footerShown, setFooterShown] = useState(true);

    return (
        <FooterShownContext.Provider value={{ footerShown, setFooterShown }}>
            {children}
        </FooterShownContext.Provider>
    )
}
export default FooterShownContext;