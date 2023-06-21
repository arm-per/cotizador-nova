import {useContext} from "react";
import LabsContext from "../Context/LabsContext";

const useLabsContext = () => {
    const context = useContext(LabsContext);
    const {findLab, filtered} = context;

    return {findLab, filtered};
}

export default useLabsContext;
