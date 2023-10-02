import {Fragment} from "react";
import SearchBar from "../Components/SearchBar";
import SmallCard from "../Components/SmallCard";
import Quote from "../Components/Quote";
import useQuoterContext from "../Hooks/useQuoterContext";
import useLabsContext from "../Hooks/useLabsContext";


const Home = () => {

    const {name} = useQuoterContext()
    const {filtered, loading, Loader} = useLabsContext()

    return <Fragment>
        <SearchBar/>
        <div className="container">
            {
                name && <h1 className={'nameTitle'}>Hola, {name}</h1>
            }
            <section className="cards-layout">
                {
                    filtered.length >= 1
                    ? !loading && filtered.map((el, index) => <SmallCard
                        title={el.name}
                        description={el.request}
                        price={el.public_cost}
                        key={`card_${index}`}/>)
                        : <p>No se han encontrado los estudios</p>
                }
                {
                    console.log('homepage', loading)
                }
                {
                    (loading && filtered.length >= 1 ) && <Loader>Cargando</Loader>
                }
            </section>
        </div>
        <Quote/>
    </Fragment>
}

export default Home;
