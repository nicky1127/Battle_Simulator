import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '250px',
    border: '10px solid #ddd',
    boxSizing: 'border-box',
    borderRadius: '50%',
    backgroundImage: (props) => `url(${props.character.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: (props) => props.character.position,
    margin: '50px'
  },
  scale: {
    '-webkit-transform': 'scale(1.2, 1.2)',
    '-webkit-transition-timing-function': 'ease-out',
    '-webkit-transition-duration': '700ms',
    transform: 'scale(1.2, 1.2)'
  }
}));

const CharacterImage = (props) => {
  const { character, playerAttack, monsterAttack } = props;

  const classes = useStyles({ ...props });

  return (
    <Paper
      id={`characterImage_${character.code}`}
      elevation={5}
      // className={clsx('characterImage', classes.root)}
      className={clsx('characterImage', classes.root, {
        [classes.scale]:
          (character.role === 'player' && playerAttack) ||
          (character.role === 'monster' && monsterAttack)
      })}
    ></Paper>
  );
};

const mapStateToProps = (state) => {
  const {
    characterReducer: { playerAttack, monsterAttack }
  } = state;

  return { playerAttack, monsterAttack };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedCharacterImage = connect(mapStateToProps, mapDispatchToProps)(CharacterImage);

export default ConnectedCharacterImage;
