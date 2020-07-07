/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {

  // la primera posicion es el valor de nuestro estado y la segunda la funcicón que nos permite actualizar ese valor
  // es un array de 2 elementos
  // está destructurado
  const [videos, setVideos] = useState({ mylist: [], trends: [], originales: [] });

  // nos permite ejecutar codigo cuando se monta, desmonta o actualiza nuestro componente
  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  // enviar el array vacio para que solo se ejecute una vez que se monte el componente
  }, []);

  // se puede pasar el valor del estado como el de un state normal , {videos}
  // console.log(videos);

  return (
    <div className="App">
      <Header />
      <Search />

      {
        videos.mylist.length > 0 && (
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Categories title="Mi lista">
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }

      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map(item =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />,
          // eslint-disable-next-line function-paren-newline
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
