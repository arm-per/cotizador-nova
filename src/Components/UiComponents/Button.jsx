import styled from "styled-components";
import {colors, transparentize} from "../../UIelements";

const Button = styled.button`
  background-color: ${colors.green["500"]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  color: white;
  border-radius: 5px;
  width: 100%;
  max-width: ${props => props.sm ? 'max-content': '100%'};
  height: 43px;
  transition: box-shadow .3s;
  box-shadow: 0 0 0 ${transparentize(colors.green["400"], 20)};
  font-size: 16px;
  padding-left: 10px;
  cursor: pointer;
  img{
    display: block;
    width: 24px;
    height: 24px;
  }
  
  &:hover{
    transition: box-shadow .3s;
    box-shadow: 0 10px 15px ${transparentize(colors.green["400"], 20)};
    background-color: ${colors.green["400"]}
    
  }
  
  &:active{
    transform: scale(.98);
    transition: transform .3s, box-shadow .3s;
    box-shadow: 0 0 0;
  }
`

const MainButton = ({children, onClick, icon, sm}) => {
    return <Button onClick={onClick} sm={sm?sm:null}>
        {
            children
        }
        <img src={icon} alt="agregar"/>
    </Button>
}

export default MainButton;
