import styled from "styled-components";
import {colors, transparentize} from "../../UIelements";
import DeleteButton from "./DeleteButton";
import useQuoterContext from "../../Hooks/useQuoterContext";

const Card = styled.div`
  width: 290px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 45px 20px;
  overflow: hidden;
  padding: 15px 5px;
  gap: 8px;
  height: max-content;
  border-bottom: 1px solid #ddd;
  
  .description{
    grid-column-start: 1;
    grid-column-end: 3;
    font-size: 13px;
  }
  
  .studyName{
    font-size: 14px;
    font-weight: 600;
    color: ${colors.gray["500"]};
  }
  
`



const StudyCard = ({name, description, price, index}) => {


    const {deleteItem} = useQuoterContext();


    return <Card>
        <div>
            <span className="studyName">
                {name}
            </span>
        </div>
        <div>
            <span>
                ${price}
            </span>
        </div>
        <div>
            <DeleteButton onClick={() => deleteItem(index)}/>
        </div>
        <div className="description">
            <span>{description}</span>
        </div>
    </Card>
}

export default StudyCard;
