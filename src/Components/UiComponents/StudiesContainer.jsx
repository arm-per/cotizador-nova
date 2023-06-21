import styled from "styled-components";
import {colors} from "../../UIelements";
import downarrow from './../../Assets/Icons/down-arrow.svg';
import useQuoterContext from "../../Hooks/useQuoterContext";
import getPrices from "../../Helpers/getPrices";
import ButtonLink from "./ButtonLink";
import {Empty} from "./index";

const Container = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  right: 0;
  display: grid;
  gap: 2px;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  animation: .5s slideup ease-out forwards;
  max-height: 70vh;
  overflow: scroll;
  width: max-content;
  box-shadow: 0 0 10px #4446;
  
  .closebutton{
    background-color: ${colors.blue["500"]};
    color: white;
    align-items: center;
    display: flex;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px 5px 0 0;
    justify-content: flex-end;
  }
  
  .quotercontainer{
    display: grid;
    gap: 3px;
    max-height: min(400px, 75vh);
    overflow-y: scroll;
  }
  
  .total{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    font-weight: 600;
    color: ${colors.blue["500"]};
    padding-block: 10px;
    place-items: center;
    padding-inline: 10px;
  }
  
  @keyframes slideup{
    0%{
      bottom: 0;
      opacity: 0;
    }
    100%{
      bottom: calc(100% + 10px);
      opacity: 1;
    }
  }
`

const StudiesContainer = props => {

    const {labStudies, setEmpty} = useQuoterContext();
    const prices = getPrices(labStudies, 'price')

    return <Container>
        <div className="closebutton" onClick={props.onClick}>
            <img src={downarrow} alt=""/>
            <span>Minimizar</span>
        </div>
        <div className="quotercontainer">
            {props.children}
        </div>

        <div className="total">
            <ButtonLink to={'/cotizacion'}>Ver resumen</ButtonLink>
            <span>Total: ${prices}</span>
        </div>
        <Empty onClick={setEmpty}/>

    </Container>
}

export default StudiesContainer;
