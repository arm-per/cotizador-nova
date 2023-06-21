import {useState, createContext, useEffect} from "react";

const initState = {
    name: '',
    labStudies: [],
};

const QuoterContext = createContext({});

export const QuoterProvider = ({children}) => {

    const [labs, setLabs] = useState(initState);

    const addLabs = (QuoterContext) => {
        setLabs({...labs, labStudies: [...labs.labStudies, QuoterContext]})

    }

    const addName = ({target}) => {
        setLabs({...labs, name: target.value})
    }

    const deleteItem = (current) => {
        setLabs({...labs, labStudies: labs.labStudies.filter(el => labs.labStudies.indexOf(el) !== current)})
    }

    const setEmpty = () => {
        setLabs({...labs, labStudies: []})
    }


    return <QuoterContext.Provider value={{...labs, addLabs, addName, deleteItem, setEmpty, }}>
        {
            children
        }
    </QuoterContext.Provider>
}

export default QuoterContext;
