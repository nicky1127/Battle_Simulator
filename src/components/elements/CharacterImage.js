import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '250px',
    border: '10px solid #ddd',
    boxSizing: 'border-box',
    borderRadius: '50%',
    backgroundImage: (props) => `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 0'
  },
  characterImage: {
    width: '100%',
    height: '100%'
  }
}));

const CharacterImage = (props) => {
  const { src, name } = props;

  const classes = useStyles({ ...props });

  return (
    <Paper
      id={`characterImage_${name}`}
      elevation={5}
      className={clsx('characterImage', classes.root)}
    >
      {/* <img src={src} className={classes.characterImage} alt={`Character ${name}`} /> */}
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
