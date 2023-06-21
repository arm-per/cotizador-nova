import styled from "styled-components";
import {createPortal} from "react-dom/";

const FixedDiv = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;
`

const FixedElement = props => {
    return createPortal(
        <FixedDiv>
            {props.children}
        </FixedDiv>,
        document.getElementById('studies'));}

export default FixedElement;
