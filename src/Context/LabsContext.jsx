import {createContext, useState, useEffect} from 'react'
import useLabs from './../Hooks/useLabs';


const LabsContext = createContext({})

export const LabsProvider = ({children}) => {

    const [filtered, setFilter] = useState([]);
    const { labs } = useLabs()

    useEffect(()=>{
        setFilter(labs)
    }, [labs])

    const findLab = ({target}) => {
        setFilter(labs.filter(el => el.name.toUpperCase().includes(target.value.toUpperCase())))
    }

    return <LabsContext.Provider value={{filtered, findLab}}>
        {
            children
        }
    </LabsContext.Provider>
}

export default LabsContext;
