//Contador de posts, mediante el uso de la api de instagram

import React, { useState, useEffect } from 'react';

const user = '7704208126306927';

const LiveCount = () => {
  const [postCount, setPostCount] = useState(null);
  const [token, setToken] = useState('');

  //Prompt para recibir token (por seguridad)
  useEffect(() => {
    const tokenInput = prompt('Ingrese token:');
    if (tokenInput) {
      setToken(tokenInput);
    } else {
      alert('Siguiendo sin conexion a la api.');
    }
  }, []);

  //Fecth de datos mediante el uso de la api y el token, usando funcion async (porque estos datos cargan despues que la pagina).
  useEffect(() => {
    const fetchPostCount = async () => {
      try {
        const response = await fetch(`https://graph.instagram.com/${user}?fields=media_count&access_token=${token}`);
        const data = await response.json();
        setPostCount(data.media_count);
      } catch (error) {
        console.log('Error:', error);
        setPostCount(null);
      }
    };

    if (token) {
      fetchPostCount();
    }
    else {
      return (
        postCount
      );
    }
  }, [token]);

  return (
    postCount
  );
};

export default LiveCount;




