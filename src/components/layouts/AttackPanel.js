import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import AttackButton from 'components/elements/AttackButton';
import AttackText from 'components/elements/AttackText';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '150px'
  }
}));

const AttackPanel = (props) => {
  const { displayAttackButton } = props;

  const classes = useStyles();

  return (
    <Box id="attackPanel" className={classes.root}>
      <AttackText />
      {displayAttackButton && <AttackButton />}
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    layoutReducer: { displayAttackButton }
  } = state;

  return { displayAttackButton };
};

const ConnectedAttackPanel = connect(mapStateToProps)(AttackPanel);

export default ConnectedAttackPanel;
