import styled from "styled-components";
import {colors} from "../../UIelements";
import useQuoterContext from "../../Hooks/useQuoterContext";

const MainInput = styled.input`
  border: 1px solid ${colors.blue["200"]};
  font-size: 16px;
  padding-inline: 10px;
  height: 43px;
  color: ${colors.blue["500"]};
  border-radius: 5px;
  background-color: ${colors.blue["100"]};
  width: 100%;
  display: block;
  box-sizing: border-box;
  
  &::placeholder{
    color: ${colors.blue["300"]};
  }
`

const Input = () => {

    const {addName, name} = useQuoterContext()

    return (
        <MainInput type="text" onChange={addName} value={name} placeholder={"Escribe tu nombre"}/>
    )
}

export default Input;
