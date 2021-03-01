/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import useInitialState from '../hoooks/useInitialState';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initalState';

// le traidgo los elementos que tengo como props
const Home = ({ myList, trends, originals }) => {

  // const initialState = useInitialState(API);

  // return initialState.length === 0 ? <h1>Loading...</h1> (
  return (
    <>
      <Search />

      {
        // si existe my list y ademas la logitud es mayor que 0, pintalo
        myList.length > 0 && (
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Categories title="Mi lista">
            <Carousel>
              {/* recocrre con map los items del json trends, el key es el item id y trae los props de la destruccturacion de item en el jason */}
              {myList.map(item =>
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} isList />,
              // eslint-disable-next-line function-paren-newline
              )}
            </Carousel>
          </Categories>
        )
      }

      <Categories title="Tendencias">
        <Carousel>
          {/* recocrre con map los items del json trends, el key es el item id y trae los props de la destruccturacion de item en el jason */}
          {trends.map(item =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />,
          // eslint-disable-next-line function-paren-newline
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales">
        <Carousel>
          {originals.map(item =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />,
            // eslint-disable-next-line function-paren-newline
          )}
        </Carousel>
      </Categories>
    </>
  );
};
// export default connect(props, actions)(Home);
// llamo los elementos que vamos a trabajar
const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
