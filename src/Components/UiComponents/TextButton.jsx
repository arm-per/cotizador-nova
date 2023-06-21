import styled from "styled-components";
import {colors, transparentize} from './../../UIelements'

const Button = styled.button`
  color: ${props => props.color ? props.color : colors.blue["500"] };
  font-size: 16px;
  border: none;
  background-color: transparent;
  height: 43px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: gap .3s ease-in;
  cursor: pointer;
  
  svg{
    display: block;
    transform: rotate(${props => props.rotate}deg);
    stroke: ${props => props.color ? props.color : colors.blue["500"] };
  }
  
  &:hover{
    color: ${props => props.color ? transparentize(props.color, 60): colors.blue["400"]}
  }
  
  &:hover svg{
    stroke:${props => props.color ? transparentize(props.color, 60): colors.blue["400"]} ;
  }
`

const TextButton = ({children, color = colors.blue["500"], angle = 90, onClick}) => {
    return <Button onClick={onClick} rotate={angle} color={color}>
        {
            children
        }
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6.00003L5 2.00003L1 6.00003" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    </Button>
}

export default TextButton
