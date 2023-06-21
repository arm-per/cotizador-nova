import {useState, useEffect} from "react";

const useLabs = () => {

    const [labs, setLabs] = useState([]);

    useEffect(()=>{
        fetch('https://api-sistema.labnova.com.mx/api/services?page=1&per_page=1000')
            .then(res => res.json())
            .then(res => setLabs(res.data.paginated.data))
            .catch(err => {
                console.error(err);
                setLabs(['Ocurrió un error, intente de nuevo más tarde'])
            })
    },[])


    return { labs };
}

export default useLabs;
