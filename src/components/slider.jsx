import React from 'react'
import skull from '../assets/img/skull.jpg'
import journey from '../assets/img/ghost.jpg'
import texture from '../assets/img/texture.jpg'


const CreateSlide = ({ref,img,alt}) => {
    return (
        <a href={ref}><img src={img} className="d-block w-100 pintura-inicio" alt={alt}/></a>
    );
};


const CreateSlider = () => {
    return (
        <React.Fragment>
            <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="10000">
                <div className="carousel-item active">
                    <CreateSlide ref={null} img={skull} alt={"skull"}/>
                </div>
                <div className="carousel-item">
                    <CreateSlide ref={null} img={journey} alt={"journey"}/>
                </div>
                <div className="carousel-item">
                    <CreateSlide ref={null} img={texture} alt={"skull"}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CreateSlider