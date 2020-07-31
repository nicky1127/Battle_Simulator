import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Screen from 'components/layouts/Screen';
import CharacterPanel from 'components/abstraction/CharacterPanel';
import BattlePanel from 'components/layouts/BattlePanel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const MainContainer = (props) => {
  const {} = props;

  const classes = useStyles();

  return (
    <main id="mainContainer" className={classes.root}>
      <Screen />
      {/* <BattlePanel /> */}
    </main>
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
