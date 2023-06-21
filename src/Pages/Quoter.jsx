import {Fragment} from "react";
import {Back} from "../Components/UiComponents";
import {PrintView} from "../PrintView";
import {PrintHeader} from "../Components/UiComponents";
import useQuoterContext from "../Hooks/useQuoterContext";

const Quoter = () =>{

    const {name, labStudies} = useQuoterContext();

    return (
        <Fragment>
            <PrintView/>
            <Back/>
            <PrintHeader name={name}/>
            <div className="container" id="view">
                <h1 className={'noprint nameTitle'} style={{textAlign: 'center'}}>{name?name:''} Esta es tu cotización</h1>
                <table id={'maintable'}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Costo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            labStudies.length > 0 ?
                                labStudies.map((el, index) => {
                                    return (
                                            <tr key={`tab_${index}`}>
                                                <td>
                                                    {el.name}
                                                </td>
                                                <td>
                                                    {el.description}
                                                </td>
                                                <td>
                                                    ${parseInt(el.price)}
                                                </td>
                                            </tr>
                                    )
                                })
                                : 'No se han agregado estudios'
                        }
                        <tr>
                            <td colSpan={3} style={{textAlign: 'right',}}>
                                Total ${
                                labStudies.length > 0
                                    ? labStudies.map(el => parseInt(el.price)).reduce((it, acc) => it + acc, 0)
                                    : '00.00'
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Quoter;
