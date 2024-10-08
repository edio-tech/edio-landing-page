import { createContext, useState } from "react";

const HeaderShownContext = createContext();

export const HeaderShownProvider = ({ children }) =>
{
    const [headerShown, setHeaderShown] = useState(true);

    return (
        <HeaderShownContext.Provider value={{ headerShown, setHeaderShown }}>
            {children}
        </HeaderShownContext.Provider>
    )
}
export default HeaderShownContext;
