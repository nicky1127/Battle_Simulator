const characters = [
  {
    code: 'pikachu',
    name: 'Pikachu',
    role: 'player',
    src: '/images/pikachu.jpg',
    position: '50% 0',
    background: '/images/forest.png',
    attack: {
      image: 'url(/images/thunder.png)',
      before:{
        width:'200px',
        height:'100px'
      },
      after:{
        width:'80%',
        height:'500px'
      }
    }
  },
  {
    code: 'ironman',
    name: 'Iron Man',
    role: 'player',
    src: '/images/ironman.jpg',
    position: '50% 50%',
    background: '/images/city.jpg',
    attack: {
      image: 'url(/images/rocket.png)',
      before:{
        width:'300px',
        height:'200px'
      },
      after:{
        width:'90%',
        height:'300px'
      }
    }
  },
  {
    code: 'elsa',
    name: 'Elsa',
    role: 'player',
    src: '/images/elsa.jpg',
    position: '50% 50%',
    background: '/images/snow.jpg',
    attack: {
      image: '/images/rocket.png'
    }
  },
  {
    code: 'monster',
    name: 'Mega Godzilla',
    role: 'monster',
    src: '/images/godzilla.jpg',
    position: '50% 50%',
    attack: '/images/fire.png',
    attack: {
      image: '/images/fire.png'
    }
  }
];

export default characters;
