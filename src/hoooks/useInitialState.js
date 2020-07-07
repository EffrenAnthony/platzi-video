import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  // la primera posicion es el valor de nuestro estado y la segunda la funcicón que nos permite actualizar ese valor
  // es un array de 2 elementos
  // está destructurado
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  // nos permite ejecutar codigo cuando se monta, desmonta o actualiza nuestro componente
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  // enviar el array vacio para que solo se ejecute una vez que se monte el componente
  }, []);

  return videos;
  // se puede pasar el valor del estado como el de un state normal , {videos}
  // console.log(videos);
};

export default useInitialState;
