import {useState} from "react";
import useQuoterContext from "../Hooks/useQuoterContext";
import {MainButton, TextButton, BodyCard, Price, HeaderCard, DescriptionCard} from "./UiComponents";
import add from './../Assets/Icons/add.svg';


const SmallCard = ({title, description, price}) => {

    const [desc, setDescription] = useState(false);
    const descriptionHandler = () => {
        setDescription(!desc);
    }

    const {addLabs} = useQuoterContext()

    return <BodyCard>
        <HeaderCard>
            {title}
        </HeaderCard>
        <Price price={price}/>
        <div className="card-buttons">
            <TextButton
                onClick={descriptionHandler}
                angle={0}>
                Indicaciones
            </TextButton>
            <MainButton
                icon={add}
                onClick={()=>addLabs({
                    name: title,
                    description: description,
                    price: price
                })}>Agregar</MainButton>
        </div>
        <DescriptionCard
            className={desc ? 'active' : ''}
            onClick={descriptionHandler}
            description={description}/>
    </BodyCard>


}

export default SmallCard;
