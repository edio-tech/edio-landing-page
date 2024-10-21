import { useContext } from "react";
import FooterShownContext from "../context/FooterShownProvider";

const useFooterShown = () =>
{
    return useContext(FooterShownContext);
}
export default useFooterShown;
