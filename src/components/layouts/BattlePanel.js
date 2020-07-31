import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import ChracterPanel from 'components/abstraction/CharacterPanel';
import Pikachu from 'components/characters/Pikachu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%'
  }
}));

const BattlePanel = (props) => {
  const {} = props;

  const classes = useStyles();

  const player = <ChracterPanel character={<Pikachu />} />;
  // const monster = <ChracterPanel character='Pikachu'/>

  return (
    <Box id="screenContainer" className={classes.root}>
      {player}
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

const ConnectedBattlePanel = connect(mapStateToProps, mapDispatchToProps)(BattlePanel);

export default ConnectedBattlePanel;
