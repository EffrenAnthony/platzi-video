/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Players.scss';
import { getVideoSource } from '../actions';
import NotFound from '../containers/NotFound';

const Player = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  // eslint-disable-next-line react/destructuring-assignment
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => { props.history.goBack(); }}>Back</button>
      </div>
    </div>
  ) :
    // <Redirect to="/404" />;
    <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
