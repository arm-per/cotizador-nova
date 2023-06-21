import {useContext} from 'react';
import QuoterContext from "../Context/QuoterContext";

const useQuoterContext = () => {
    const context = useContext(QuoterContext);
    const {name, labStudies, addName, setEmpty, deleteItem, addLabs} = context;

    return {name, labStudies, context, addName, setEmpty, deleteItem, addLabs}
}

export default useQuoterContext;

