import styled from 'styled-components';
import {colors} from "../../UIelements";

const EmptyButton = styled.button`
  color: ${colors.red["500"]};
  border-radius: 5px;
  width: 100%;
  border: none;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`

const Empty = ({onClick}) => {

    return <EmptyButton onClick={onClick}>
        Borrar todo
    </EmptyButton>
}

export default Empty;
