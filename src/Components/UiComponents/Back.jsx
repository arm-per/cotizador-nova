import styled from "styled-components";
import {colors} from "../../UIelements";
import {Link} from 'react-router-dom';
import Button from "./Button";
import download from './../../Assets/Icons/download.svg';
import back from './../../Assets/Icons/back.svg';

const BackContainer = styled.div`
  background-color: ${colors.blue["300"]};
  padding-block: 10px;
  padding-inline: 15px;
  
  .container{
    display: flex;
    justify-content: space-between;
  }
`

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: center;
  color: white;
  text-decoration: none;
`


const Back = () => {

    const saveHandler = () => {
        window.print();
    }

    return <BackContainer>
        <div className="container">
            <CustomLink to={"/"}><img src={back} alt={"back"}/> Regresar </CustomLink>
            <Button sm={'sm'} icon={download} onClick={saveHandler}>
                Guardar
            </Button>
        </div>
    </BackContainer>
}

export default Back;
