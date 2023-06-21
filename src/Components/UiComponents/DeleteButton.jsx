import styled from "styled-components";
import {colors,transparentize} from "../../UIelements";
import erase from "./../../Assets/Icons/delete.svg";

const Delete = styled.div`
  background-color: ${colors.red["500"]};
  height: 20px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  border-radius: 40px;
  padding: 3px;
  cursor: pointer;
  
  &:hover{
    background-color: ${transparentize(colors.red["500"], 90)};
    transform: scale(1.05);
    transition: transform .2s;
  }
  
  img{
    max-width: 100%;
  }
`

const DeleteButton = ({onClick}) => {

    return (
        <Delete onClick={onClick}>
            <img src={erase} alt='eliminar elemento'/>
        </Delete>
    )
}

export default DeleteButton;
