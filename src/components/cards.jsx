import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateCard = ({ img, name, alt, url1 }) => {
    return (
        <div className="col">
            <div className="card">
                <div style={{ backgroundImage: `url(${img})` }} className="card-img-top" id="card-paint" alt={alt} onClick={() => window.open(url1, '_blank')} target="_blank"></div>
                <div className="card-body">
                    <h5 className="card-title">"{name}"</h5>
                </div>
            </div>
        </div>
    );
}

const CreateCardGroup = () => {
    const [reacts, setReacts] = useState([]);
    const [chunkedReacts, setChunkedReacts] = useState([]);
    const [mode, setMode] = useState('md');

    useEffect(() => {
        const fetchReactData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/drawings/');
                setReacts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchReactData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 426) {
                setMode('sm'); 
            } else {
                setMode('md');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const chunkArray = (array, size) => {
            return array.reduce((acc, _, index) => {
                if (index % size === 0) {
                    acc.push(array.slice(index, index + size));
                }
                return acc;
            }, []);
        };

        const chunkSize = mode === 'sm' ? 1 : 3;
        setChunkedReacts(chunkArray(reacts, chunkSize));
    }, [reacts, mode]);

    return (
        <div id="card-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
            <div className="carousel-inner">
                {chunkedReacts.map((chunk, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className="row row-cols-1 row-cols-md-3 g-4" id="info">
                            {chunk.map((react, idx) => (
                                <CreateCard key={idx} img={react.image} name={react.title} alt={react.title} url1={react.link} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CreateCardGroup;