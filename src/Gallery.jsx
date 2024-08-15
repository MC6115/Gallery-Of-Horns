import HornedBeast from './Horned-beast';
import hornedBeast from './hornedBeast.json';

function Gallery() {
    return (
        <>
            <HornedBeast title={'imagen1'} description="esta es una imagen de referencia" imageURL="https://plus.unsplash.com/premium_photo-1669796647747-8dd80f51c822?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dx`" />
            <HornedBeast title={'imagen1'} description="esta es una imagen de referencia" imageURL="https://plus.unsplash.com/premium_photo-1661868928072-e58ad0eedcbc?q=80&w=1765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            {
                hornedBeast.map(data => (
                    <HornedBeast title={data.title} description={data.description} imageURL={data.image_url} />
                ))
            }
        </>
    );
}

export default Gallery