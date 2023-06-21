import styled from 'styled-components';

const Card = styled.article`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 10px #ddd4;
  position: relative;
`

const BodyCard = ({children}) => {
    return <Card>{children}</Card>
}

export default BodyCard;
