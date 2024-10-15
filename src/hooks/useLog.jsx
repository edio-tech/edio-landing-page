import { useContext } from "react";
import LogContext from "../context/LogProvider";

const useLog = () =>
{
    return useContext(LogContext);
}
export default useLog;
