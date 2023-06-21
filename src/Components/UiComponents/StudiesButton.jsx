import styled from 'styled-components';
import icon from './../../Assets/Icons/list.svg'
import {colors} from "../../UIelements";
import useQuoterContext from "../../Hooks/useQuoterContext";

const Button = styled.button`
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue["300"]};
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  
  img{
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    height: 100%;
  }
  
  &.active div{
    position: absolute;
    top: -10px;
    right: 0;
    background-color: ${colors.red["500"]};
    border-radius: 100%;
    width: 20px;
    height:20px ;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
  }
`

const StudiesButton = ({onClick}) => {

    const {labStudies} = useQuoterContext();

    return (
        <Button onClick={onClick} className={labStudies.length > 0?'active':''}>
            <div>{labStudies.length > 0?labStudies.length:''}</div>
            <img src={icon} alt=""/>
        </Button>
    )
}

export default StudiesButton;
