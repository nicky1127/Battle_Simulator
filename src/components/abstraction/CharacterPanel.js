import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import DiceContainer from 'components/elements/DiceContainer';
import diceRoller from 'dice-roller-3d';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '600px',
    height: '100%',
    // border: '10px solid black',
    boxSizing: 'border-box',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: (props) => (props.character.role === 'monster' ? 'row-reverse' : 'row'),
    justifyContent: (props) => (props.character.role === 'monster' ? 'flex-end' : 'flex-start'),
    // alignItems: 'center',
    marginLeft: (props) => props.character.role === 'monster' && 'auto'
  }
}));

const MainContainer = (props) => {
  const { character, characterGrid } = props;

  const classes = useStyles({ ...props });

  return (
    <Box id="characterPanel" className={classes.root}>
      {characterGrid}
      <DiceContainer code={character.code} role={character.role} />
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
