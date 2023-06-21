import styled from 'styled-components';
import {colors} from "../../UIelements";
import logo from "./../../Assets/logo.svg"

const Header = styled.header`
  background-color: ${colors.blue["500"]};
  height: 65px;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  display: flex;
  align-items: center;
  
  a{
    display: block;
  }
  
  img{
    display: block;
    width: 80px;
  }
  
  .container{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  h1{
    font-weight: 500;
    font-size: 20px
  }
`

const MainHeader = () => {
    return <Header>
        <div className="container">
            <a href="https://labnova.com.mx" target="_blank">
                <img src={logo} alt="Logotipo de laboratorio Nova"/>
            </a>
            <h1>Cotizador Nova</h1>
        </div>
    </Header>
}

export default MainHeader;
