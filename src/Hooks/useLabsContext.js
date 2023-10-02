import {useContext} from "react";
import LabsContext from "../Context/LabsContext";

const useLabsContext = () => {
    const context = useContext(LabsContext);
    const {findLab, filtered, loading, Loader} = context;

    return {findLab, filtered, loading, Loader};
}

export default useLabsContext;
