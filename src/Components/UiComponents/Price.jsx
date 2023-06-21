import styled from "styled-components";
import {colors} from "../../UIelements";

const Prices = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  
  span{
    color: ${colors.gray["400"]};
    display: block;
    font-size: 16px;
    &:nth-child(2){
      font-weight: bold;
    }
  }
`

const Price = ({price = 200}) => {
    return <Prices>
        <span>Costo</span>
        <span>${price}.00</span>
    </Prices>
}

export default Price;
