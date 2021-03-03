import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/Search.scss';
import classNames from 'classnames';
import { getResultOfSearch } from '../actions';

const Search = (props) => {

  const { isHome } = props;
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInputChange = (event) => {
    props.getResultOfSearch(event.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." onChange={handleInputChange} />
    </section>
  );
};

const mapDispatchToProps = {
  getResultOfSearch,
};

Search.propTypes = {
  isHome: PropTypes.bool,
  getResultOfSearch: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Search);
