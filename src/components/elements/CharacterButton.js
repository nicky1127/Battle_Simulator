import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '180px',
    height: '180px',
    border: '10px solid #ddd',
    boxSizing: 'border-box',
    borderRadius: '5%',
    backgroundImage: (props) => `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: (props) => props.position,
    margin: '20px'
  }
}));

const CharacterButton = (props) => {
  const { code } = props;

  const classes = useStyles({ ...props });

  return (
    <Paper
      id={`characterButton_${code}`}
      elevation={5}
      className={clsx('CharacterButton', classes.root)}
    ></Paper>
  );
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedCharacterButton = connect(mapStateToProps, mapDispatchToProps)(CharacterButton);

export default ConnectedCharacterButton;
