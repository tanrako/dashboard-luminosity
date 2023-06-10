import React from 'react';
import axios from 'axios';

const GetListButton = () => {
  const handleClick = () => {
    axios.get('https://api.example.com/data')
      .then(response => {
        // Traitez la réponse de l'appel ici
        console.log(response.data);
      })
      .catch(error => {
        // Traitez les erreurs ici
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Effectuer un appel Axios</button>
    </div>
  );
};

export default GetListButton;
