import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '250px'
    // border: '10px solid black',
    // boxSizing: 'border-box',
    // borderRadius: '25px'
  },
  characterImage: {
    width: '100%',
    height: '100%'
  }
}));

const CharacterImage = (props) => {
  const { src, name } = props;

  const classes = useStyles();

  return (
    <Paper id={`characterImage_${name}`} elevation={5} className={clsx('characterImage', classes.root)}>
      <img src={src} className={classes.characterImage} alt={`Character ${name}`} />
    </Paper>
  );
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedCharacterImage = connect(mapStateToProps, mapDispatchToProps)(CharacterImage);

export default ConnectedCharacterImage;
