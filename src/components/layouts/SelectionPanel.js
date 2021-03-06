import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import ConfirmButton from 'components/elements/ConfirmButton';
import CharacterButton from 'components/elements/CharacterButton';
import { setGameStage } from 'redux/_actions/status';

import constants from 'constants/index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '65%',
    height: '70%',
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
  characterContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '270px'
  },
  text: {
    fontFamily: 'Luckiest Guy, cursive',
    fontSize: '60px'
  }
}));

const SelectionPanel = (props) => {
  const { playerChrCode } = props;
  const classes = useStyles();

  const text = 'Please Choose Your Character';

  const content = constants.characters
    .filter((chr) => chr.role === 'player')
    .map((chr) => <CharacterButton character={chr} />);

  return (
    <Box id="selectionPanel" className={classes.root}>
      <Typography className={classes.text}>{text}</Typography>
      <Box className={classes.characterContainer}>{content}</Box>
      <ConfirmButton
        text="Next"
        width="150px"
        height="80px"
        fontSize="30px"
        callback={() => playerChrCode && props.setGameStage('start_guide')}
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

const ConnectedSelectionPanel = connect(mapStateToProps, { setGameStage })(SelectionPanel);

export default ConnectedSelectionPanel;
