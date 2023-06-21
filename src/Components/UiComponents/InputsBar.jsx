import styled from "styled-components";
import {colors} from "../../UIelements";

const InputBar = styled.section`
  background-color: ${colors.blue["400"]};
  padding-block: 15px;
  
  .container{
    display: grid;
    gap: 12px;
    padding-inline: 10px;
    box-sizing: border-box;
  }
  
  @media (min-width: 620px){
    &{
      .container{
        grid-template-columns: repeat(2,1fr);
        gap: 10px;
      }
    }
  }

  @media (min-width: 1024px){
    &{
      .container{
        grid-template-columns: repeat(2, 300px);
        gap: 12px;
      }
    }
  }

  @media (min-width: 1200px){
    &{
      .container{
        padding-inline: 0;
      }
    }
  }
  
`

const InputsBar = ({children}) => {
    return <InputBar><div className="container">{children}</div></InputBar>
}

export default InputsBar;
