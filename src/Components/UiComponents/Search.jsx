import styled from "styled-components";
import {colors} from "../../UIelements";
import useLabsContext from "../../Hooks/useLabsContext";

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
    color: ${colors.blue["300"]}
  }
`

const Search = () => {

    const {findLab} = useLabsContext()

    return (
        <MainInput type="search" onChange={findLab} placeholder={"¿Buscas algún estudio?"}/>
    )
}

export default Search;
