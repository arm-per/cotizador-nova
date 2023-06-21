import {StudiesButton, StudyCard, FixedElement, StudiesContainer, Empty} from "./UiComponents";
import {useState} from "react";
import useQuoterContext from "../Hooks/useQuoterContext";


const Quote = () => {

    const [display, setDisplay] = useState(true);
    const displayHandler = () => {
        setDisplay(!display);
    }


    const {labStudies} = useQuoterContext();


    return <FixedElement>
        {
            display ?
            labStudies.length > 0 &&
                <StudiesContainer onClick={displayHandler}>
                    {
                        labStudies && labStudies.map((el, index) => {
                                return <StudyCard name={el.name}
                                                  key={`quote_${index}`}
                                                  price={el.price}
                                                  index={index}
                                                    description={el.description}/>
                            }
                        )
                    }
                </StudiesContainer>
                : null
        }
        <StudiesButton onClick={displayHandler}/>
    </FixedElement>
}

export default Quote
