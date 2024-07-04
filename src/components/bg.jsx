import React, { useState, useEffect } from 'react';

const Background = () => {
    const [mode, setMode] = useState();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 570 && window.innerWidth >=1024) {
                setMode('bg2');
            }
            else if(window.scrollY >= 390 && window.innerWidth <=769) {
                setMode('bg2');
            }
            else if(window.scrollY >= 450 && window.innerWidth <=426) {
                setMode('bg2');
            }
            else if(window.scrollY >= 500 && window.innerWidth <=375) {
                setMode('bg2');
            } else {
                setMode('bg1');
            }
        };

        handleScroll();

        window.addEventListener('resize', handleScroll);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        mode
    );
};

export default Background;
