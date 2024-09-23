import { useContext } from "react";
import HeaderShownContext from "../context/HeaderShownProvider";

const useHeaderShown = () =>
{
    return useContext(HeaderShownContext);
}
export default useHeaderShown;
