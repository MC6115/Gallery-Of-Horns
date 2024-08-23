import HornedBeast from './Horned-beast';
import hornedBeast from './hornedBeast.json';

function Gallery() {
    return (
        <>
        <section>
            {
                hornedBeast.map(data => (
                    <HornedBeast key={data._id} title={data.title} description={data.description} imageURL={data.image_url} horns={data.horns} />
                ))
            }
        </section>
        </>
    );
}

export default Gallery