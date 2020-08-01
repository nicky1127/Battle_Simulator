import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import BattlePanel from 'components/layouts/BattlePanel';
import FinishPanel from 'components/layouts/FinishPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1600px',
    height: '800px',
    boxSizing: 'border-box',
    border: '40px solid #000',
    borderRadius: '25px'
  }
}));

const MainContainer = (props) => {
  const { stage } = props;

  const classes = useStyles();

  let content;

  switch (stage) {
    case 'start':
      content = <BattlePanel />;
      break;
    case 'battle':
      content = <BattlePanel />;
      break;
    case 'finish':
      content = <FinishPanel />;
      break;
    default:
  }

  return (
    <Box id="screenContainer" className={classes.root}>
      {/* {content} */}
      <FinishPanel />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    statusReducer: { stage }
  } = state;

  return { stage };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedMainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default ConnectedMainContainer;
