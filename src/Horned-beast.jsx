import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
    const [Clicks, setClicks] = useState(0);

    function favorite() {
        setClicks(Clicks + 1);
    }

    return (
        <>
            <br />
            <Card style={{ width: '18rem' }} onClick={()=>props.mostrarModal(props.title)}>
                <Card.Img variant="top" src={props.imageURL} alt={props.title} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                        <br />
                        Numero de cuernos: {props.horns}
                    </Card.Text>
                    <Button onClick={(e) => {
                        e.stopPropagation(); 
                        favorite();
                    }}>
                        Fav - {Clicks}
                    </Button>
                </Card.Body>
            </Card>
            <br />
        </>
    );
}

export default HornedBeast;