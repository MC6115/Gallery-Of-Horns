import { useState } from "react";

import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
    const [Clicks, setClicks] = useState(0);

    function favorite() {
        setClicks(Clicks + 1);
        props.mostrarModal(props.title);
    }

    return (
        <>
            <br />
            <Card style={{ width: '18rem' }} onClick={favorite} >
                <Card.Img variant="top" src={props.imageURL} alt={props.title} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                        <br />
                        Numero de cuernos: {props.horns}
                        Fav - {Clicks}
                    </Card.Text>

                </Card.Body>
            </Card>
            <br />
        </>
    );
}

export default HornedBeast;
{/*}
<Button onClick={(e) => {
                        e.stopPropagation(); 
                        favorite();
                    }}>
                    </Button>
                    */}