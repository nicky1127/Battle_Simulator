import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import AttackButton from 'components/elements/AttackButton';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'flex-end'
  }
}));

const BattlePanel = (props) => {
  const {} = props;

  const classes = useStyles();

  return (
    <Box id="battackPanel" className={classes.root}>
      <AttackButton />
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
