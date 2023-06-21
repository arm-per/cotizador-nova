import styled from "styled-components";
import {colors} from "../../UIelements";

const Title = styled.header`
  color: white;
  background-color: ${colors.blue["400"]};
  padding: 15px 10px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  
  h3{
    margin: 0;
    font-size: 16px;
    line-height: 140%;
    font-weight: 600;
  }
`

const TitleCard = ({children}) => {
    return <Title><h3>{children}</h3></Title>
}

export default TitleCard;
