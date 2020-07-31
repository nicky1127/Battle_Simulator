import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import Character from 'components/elements/CharacterImage';
import HealthBar from 'components/elements/HealthBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '500px',
    height: '100%',
    border: '10px solid black',
    boxSizing: 'border-box',
    borderRadius: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const MainContainer = (props) => {
  const { character } = props;

  const classes = useStyles();

  return (
    <Box id="screenContainer" className={classes.root}>
      {character}
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedMainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default ConnectedMainContainer;
