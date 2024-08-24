import HornedBeast from './Horned-beast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import rawData from './hornedBeast.json';

function Gallery(props) {
    const [allBeast, setAllBeast] = useState(rawData);
    const [filteredBeast, setFilteredBeast] = useState(rawData);

    function filter(event) {
        const numCuernos = parseInt(event.target.value);
        let gallery = allBeast;
        console.log("afuera del if", gallery);
        if (numCuernos) {
            gallery = allBeast.filter((criatura) => criatura.horns === numCuernos);
        }
        setFilteredBeast(gallery);
    };

    return (
        <>
            <Container >
                <Form action="https://www.apple.com" style={{ width: 400, margin: "auto" }} >
                    <Form.Label>Cuantos cuernos quieres ver?</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={filter} >
                        <option value=''>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">One hundred</option>
                    </Form.Select>
                    <Button type="submit"> Filtrar</Button>
                </Form>
                <Row xs={2} md={4} lg={6} >
                    {

                        filteredBeast.map(beast => (
                            <HornedBeast
                                mostrarModal={props.mostrarModal}
                                key={beast._id}
                                // addFavorite={addFavorite}
                                beast={beast}
                            />
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Gallery;