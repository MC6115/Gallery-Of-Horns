import { useState } from "react";

import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
    const [contador, setContador] = useState(0);

    function favoritos(info) {
        setContador(contador + 1);
        props.mostrarModal(info);
    }
    return (
        <>
            <Card style={{ width: '18rem' }} onClick={() => { favoritos(props.beast) }} >
                <Card.Img variant="top" src={props.beast.image_url} alt={props.beast.title} />
                <Card.Body>
                    <Card.Title>{props.beast.title}</Card.Title>
                    <Card.Text>
                        <strong>Descripción</strong> : {props.beast.description}
                        <div></div>
                        <strong>Numero de cuernos</strong>: {props.beast.horns}
                        <div></div>
                        {contador === 0 ? (<p>No hay likes</p>) : (<p><strong>Fav</strong> - {contador}</p>)}
                    </Card.Text>
                </Card.Body>
            </Card>
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