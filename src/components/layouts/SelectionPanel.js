import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import ConfirmButton from 'components/elements/ConfirmButton';
import CharacterButton from 'components/elements/CharacterButton';

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
    paddingTop: '50px'
  },
  characterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Luckiest Guy, cursive',
    fontSize: '60px'
  }
}));

const SelectionPanel = (props) => {
  const classes = useStyles();

  const text = 'Please Choose Your Character';

  const content = constants.characters
    .filter((chr) => chr.role === 'player')
    .map((chr) => <CharacterButton code={chr.code} src={chr.src} position={chr.position} />);

  return (
    <Box id="selectionPanel" className={classes.root}>
      <Typography className={classes.text}>{text}</Typography>
      <Box className={classes.characterContainer}>{content}</Box>
      <ConfirmButton text="Next" width="150px" height="80px" fontSize="30px" />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const ConnectedSelectionPanel = connect(mapStateToProps)(SelectionPanel);

export default ConnectedSelectionPanel;
