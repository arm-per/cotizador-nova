import styled from "styled-components";
import {colors, transparentize, } from "../../UIelements";

const Desc = styled.div`
  background-color: ${transparentize(colors.blue["500"], 90)};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100%;
  padding: 15px;
  box-sizing: border-box;
  transition: top .3s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;

  
  p{
    line-height: 140%;
    font-size: 14px;
    color: white;
    width: 100%;
    height: 75%;
    box-sizing: border-box;
    text-align: center;
    overflow: scroll;
    position: relative;
    top: 15px;
  }
  
  &.active{
    top: 0;
    transition: top .3s ease-out;
  }
`

const CloseButton = styled.button`
  color: white;
  background-color: ${colors.blue["300"]};
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: 0;
  width: 100px;
  font-size: 13px;
  padding-block: 10px;
  left: calc(50% - 50px);
  border: none;
  transition: transform .3s ease-out, background-color .3s;
  cursor: pointer;
  
  &:hover{
    background-color: ${colors.blue["400"]};
    transition:  background-color .3s;
  }
  
  &:active{
    transform: scale(.98);
    transition: transform .3s ease-out;
  }
`

const DescriptionCard = ({onClick, description, className}) => {
    return <Desc className={className}>
        <CloseButton onClick={onClick}>
            Cerrar
        </CloseButton>
        <p>
            {
                description
            }
        </p>
    </Desc>
}

export default DescriptionCard;
