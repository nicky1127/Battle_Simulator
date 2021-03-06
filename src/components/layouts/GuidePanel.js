import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import ConfirmButton from 'components/elements/ConfirmButton';
import { setGameStage } from 'redux/_actions/status';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    height: '80%',
    backgroundColor: '#7986cb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    boxShadow: '0 0 0 15px #4527a0',
    borderRadius: '15px',
    paddingTop: '30px'
  },
  title: {
    fontFamily: 'Luckiest Guy, cursive',
    fontSize: '50px'
  },
  text: {
    fontFamily: 'Permanent Marker, cursive',
    display: 'block',
    width: '85%',
    height: '70%',
    fontSize: '30px'
  }
}));

const GuidePanel = (props) => {
  const { playerChrCode } = props;
  const classes = useStyles();

  const title = 'How You Play';

  const text1 = `
    Click the "Attack" button in the middle of the screen to fire your move.
    You and your opponent then roll the dice and the one having the highest number decreases the others
    health with the difference between the two scores. The winner will be the one to decrease the others health down to zero.
    `;

  const text2 = `Go on! Have a try! `;

  const text3 = `Note: Scores will be multiplied by 10 for speeding up the game. `;

  return (
    <Box id="guidePanel" className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography classes={{ root: classes.text }}>{text1}</Typography>
      <br />
      <Typography classes={{ root: classes.text }}>{text2}</Typography>
      <br />
      <Typography classes={{ root: classes.text }}>{text3}</Typography>
      <ConfirmButton
        text="Next"
        width="150px"
        height="70px"
        fontSize="30px"
        callback={() => playerChrCode && props.setGameStage('battle')}
      />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    characterReducer: { playerChrCode }
  } = state;

  return { playerChrCode };
};

const ConnectedGuidePanel = connect(mapStateToProps, { setGameStage })(GuidePanel);

export default ConnectedGuidePanel;
