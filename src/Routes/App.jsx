import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyles from "../GlobalStyles";
import { MainHeader } from "../Components/UiComponents";
import Home from "../Pages/Home";
import Quoter from "../Pages/Quoter";
import {LabsProvider} from "../Context/LabsContext";
import {QuoterProvider} from "../Context/QuoterContext";


export const App = () => {


    return(
        <BrowserRouter>
            <LabsProvider>
                <QuoterProvider>
                    <GlobalStyles/>
                    <MainHeader/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cotizacion" element={<Quoter/>}/>
                    </Routes>
                </QuoterProvider>
            </LabsProvider>
        </BrowserRouter>
    )
}
