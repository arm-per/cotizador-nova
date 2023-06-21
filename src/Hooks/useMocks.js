import {useState, useEffect} from "react";
import createData from "../__mocks__";

const useMocks = () => {
    const [mock, setMock] = useState([]);

    useEffect(()=>{
        createData()
            .then(res => setMock(res))
            .catch(err => console.error(err))
    },[])

    return {mock}
}

export default useMocks;
