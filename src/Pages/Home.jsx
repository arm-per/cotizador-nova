import {Fragment} from "react";
import SearchBar from "../Components/SearchBar";
import SmallCard from "../Components/SmallCard";
import Quote from "../Components/Quote";
import useQuoterContext from "../Hooks/useQuoterContext";
import useLabsContext from "../Hooks/useLabsContext";


const Home = () => {

    const {name} = useQuoterContext()
    const {filtered} = useLabsContext()

    return <Fragment>
        <SearchBar/>
        <div className="container">
            {
                name && <h1 className={'nameTitle'}>Hola, {name}</h1>
            }
            <section className="cards-layout">
                {
                    filtered.length >= 1
                    ?filtered.map((el, index) => <SmallCard
                        title={el.name}
                        description={el.request}
                        price={el.public_cost}
                        key={`card_${index}`}/>)
                    :<p className="nostudies">No se han encontrado estudios</p>
                }
            </section>
        </div>
        <Quote/>
    </Fragment>
}

export default Home;
