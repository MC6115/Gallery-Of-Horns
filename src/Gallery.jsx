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

    const uniqueHorns = [];

    rawData.forEach(item => {
        if (!uniqueHorns.includes(item.horns)) {
            uniqueHorns.push(item.horns);
        }
    });
    const options = uniqueHorns.map((horn, index) => {
        if (horn === 1) {
            return (
                <option key={index} value={horn}>
                    {horn} Horn
                </option>
            );
        } else {
            return (
                <option key={index} value={horn}>
                    {horn} Horns
                </option>
            );
        }
    });

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
                <Form style={{ width: 400, margin: "auto" }} >
                    <Form.Label>Cuantos cuernos quieres ver?</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={filter} >
                        <option value=''>Open this select menu</option>
                        {options}
                    </Form.Select>
                    <Button type="submit"> Filtrar</Button>
                </Form>
                <Row xs={2} md={4} lg={6} >
                    {
                        filteredBeast.map(beast => (
                            <HornedBeast
                                mostrarModal={props.mostrarModal}
                                key={beast._id}
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