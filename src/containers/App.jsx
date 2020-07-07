/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hoooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {

  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />

      {
        // si existe my list y ademas la logitud es mayor que 0, pintalo
        initialState.mylist.length > 0 && (
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
          {/* recocrre con map los items del json trends, el key es el item id y trae los props de la destruccturacion de item en el jason */}
          {initialState.trends.map(item =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />,
          // eslint-disable-next-line function-paren-newline
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales">
        <Carousel>
          {initialState.originals.map(item =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />,
            // eslint-disable-next-line function-paren-newline
          )}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
