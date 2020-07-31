import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '600px',
    height: '100%',
    border: '10px solid black',
    boxSizing: 'border-box',
    borderRadius: '25px',
    display: 'flex',
    justifyContent: (props) => (props.position === 'right' ? 'flex-end' : 'flex-start'),
    alignItems: 'center',
    marginLeft: (props) => props.position === 'right' && 'auto'
  }
}));

const MainContainer = (props) => {
  const { character } = props;

  const classes = useStyles({ ...props });

  return (
    <Box id="characterPanel" className={classes.root}>
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
