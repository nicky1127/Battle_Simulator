import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import CharacterGrid from 'components/abstraction/CharacterGrid';
import HealthBar from 'components/elements/HealthBar';
import CharacterImage from 'components/elements/CharacterImage';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '250px'
    // border: '10px solid black',
    // boxSizing: 'border-box',
    // borderRadius: '25px'
  }
}));

const Pikachu = (props) => {
  const classes = useStyles();

  const healthBar = <healthBar max={100} current={30} />;
  const image = <CharacterImage src="/images/pikachu.jpg" name="Pikachu" />;

  return <CharacterGrid healthBar={healthBar} image={image} name="Pikachu" />;
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedPikachu = connect(mapStateToProps, mapDispatchToProps)(Pikachu);

export default ConnectedPikachu;
