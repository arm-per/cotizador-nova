import {createContext, useState, useEffect} from 'react'
import useLabs from './../Hooks/useLabs';
import { Wait as Loader} from '../Components/Loader';


const LabsContext = createContext({})

export const LabsProvider = ({children}) => {

    const [filtered, setFilter] = useState([]);
    const { labs } = useLabs()
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState(0)

    useEffect(()=>{
        setFilter(labs)
    }, [labs])

    useEffect(()=> {
        const delay = setTimeout(()=>{
            setLoading(false)
            console.log(loading)
        },2000)
        return () => clearTimeout(delay)
    }, [loading])

    const findLab = ({target}) => {
        setLoading(true)
        setValue(value + 1)
        setFilter(labs.filter(el => el.name.toUpperCase().includes(target.value.toUpperCase())))
    }


    return <LabsContext.Provider value={{filtered, findLab, loading, Loader}}>
        {
            children
        }
    </LabsContext.Provider>
}

export default LabsContext;
