import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import AttackButton from 'components/elements/AttackButton';
import Attacktext from 'components/elements/AttackText';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:'200px'
  },
}));

const BattlePanel = (props) => {
  const { payerRolling, monsterRolling } = props;

  const classes = useStyles();

  return (
    <Box id="battackPanel" className={classes.root}>
      <Attacktext/>
      {!payerRolling && !monsterRolling && <AttackButton />}
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    diceReducer: { payerRolling, monsterRolling }
  } = state;

  return { payerRolling, monsterRolling };
};

const ConnectedBattlePanel = connect(mapStateToProps)(BattlePanel);

export default ConnectedBattlePanel;
