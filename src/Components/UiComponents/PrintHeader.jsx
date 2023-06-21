import styled from 'styled-components';
import logo from './../../Assets/nova_color.png';

const Header = styled.table`
    
    img{
      width: 120px;
      padding-right: 20px;
    }
    
    p{
      text-align: left;
      margin-block: 10px;
    }
 
`

const PrintHeader = ({name}) => {

    const fecha = new Date();
    const currentDate = fecha.getDate()
    const currentMonth = fecha.getMonth()
    const currentYear = fecha.getFullYear();
    const currentHour = fecha.getHours()
    const currentMinutes = fecha.getMinutes();


    return <div className="container printview">
       <Header className="printview">
            <tr>
                <th>
                    <img src={logo} alt=""/>
                </th>
                <th>
                    <p>Laboratorio de análisis clínicos Nova</p>
                    <p>{name?`Nombre: ${name}`:''}</p>
                    <p>Cotizado el: {`${currentDate}/${currentMonth + 1}/${currentYear}`} a las {`${currentHour}:${(currentMinutes < 10)?'0'+currentMinutes:currentMinutes}`}</p>
                </th>
            </tr>
        </Header>
    </div>
}

export default PrintHeader;
