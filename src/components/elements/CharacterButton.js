import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { setPlayerChrCode } from 'redux/_actions/character';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '180px',
    height: '180px',
    border: (props) => (props.isSelected ? '10px solid red' : '10px solid #ddd'),
    boxSizing: 'border-box',
    borderRadius: '5%',
    backgroundImage: (props) => `url(${props.character.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: (props) => props.character.position,
    paddingBottom: '10px',
    margin: '10px 30px',
    '&:hover': {
      cursor: ' pointer',
      // backgroundColor: '#039be5',
      '-webkit-transform': 'scale(1.1, 1.1)',
      '-webkit-transition-timing-function': 'ease-out',
      '-webkit-transition-duration': '250ms',
      '-moz-transform': 'scale(1.1, 1.1)',
      '-moz-transition-timing-function': 'ease-out',
      '-moz-transition-duration': '250ms',
      '& ~ .nameText': {
        display: 'block'
      }
    }
  },
  nameText: {
    fontSize: '50px',
    fontFamily: 'Ranchers, cursive',
    textAlign: 'center',
    display: 'none'
  }
}));

const CharacterButton = (props) => {
  const { character, playerCharacter } = props;
  const [isSelected, setIsSelected] = useState(false);

  const classes = useStyles({ ...props, isSelected });

  useEffect(() => {
    if (playerCharacter && playerCharacter === character.code) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [playerCharacter]);

  return (
    <div>
      <Paper
        id={`characterButton_${character.code}`}
        elevation={5}
        className={clsx('CharacterButton', classes.root)}
        onClick={() => props.setPlayerChrCode(character.code)}
      ></Paper>
      <Typography className={clsx('nameText', classes.nameText)}>{character.name}</Typography>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    characterReducer: { playerChrCode }
  } = state;

  return { playerCharacter: playerChrCode };
};

const ConnectedCharacterButton = connect(mapStateToProps, { setPlayerChrCode })(CharacterButton);

export default ConnectedCharacterButton;
