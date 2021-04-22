import { Container, Row } from 'react-bootstrap';
import { AiOutlineFire } from 'react-icons/ai';
import '../../App.css';
import './plantsListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPlant from '../cardPlant/cardPlant';

export const PlantsListContainer = ({tittle, greeting, anchor, plants}) => {
    return (
        <Container className="section" id={anchor}>
          <h4 className="tittleH1 mt-5 plantPrimary">{greeting}</h4>

        <h1 className="tittleH1 mb-4">
          {tittle}
          <AiOutlineFire className="plantPrimary"/>
          </h1>
        <Row>
          {plants.map((plant) => (
            
            <CardPlant
            name={plant.name}
            description={plant.description}
            price={plant.price}
            stock={plant.stock}
            img={Math.floor(Math.random() * 12) + 1}
            />
          ))}
          

        </Row>
      </Container>
    )
}