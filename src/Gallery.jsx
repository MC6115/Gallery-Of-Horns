import HornedBeast from './Horned-beast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gallery(props) {
    return (
        <>
            <Container>
                <Row xs={2} md={4} lg={6}>
                    {
                        props.allBeast.map(hornedBeast => (
                            <HornedBeast
                                mostrarModal={props.mostrarModal}
                                key={hornedBeast._id}
                                title={hornedBeast.title}
                                description={hornedBeast.description}
                                imageURL={hornedBeast.image_url}
                                horns={hornedBeast.horns}
                            />
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Gallery;