import { StyleSheet } from 'react-native';

const youtubestyles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  link: {
    textDecorationLine: 'none',
    color: 'black',
  },
  scrollBar: {
    width: 0,
    height: 5,
  },
  scrollThumb: {
    backgroundColor: 'rgb(114, 113, 113)',
    borderRadius: 10,
    height: 200,
  },
  scrollTrack: {
    backgroundColor: 'transparent',
  },
  categoryBtn: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    padding: 7,
    margin: 10,
    borderRadius: 20,
    transitionDuration: 0.3,
  },
  categoryBtnHover: {
    backgroundColor: '#FC1503',
    color: 'white',
  },
  categoryBtnSpanHover: {
    color: 'white',
  },
  reactPlayer: {
    height: '77vh',
    width: '100%',
  },
  searchBar: {
    borderWidth: 0,
    outlineWidth: 0,
    width: 350,
  },
  '@media (max-width: 900px)': {
    categoryBtn: {
      margin: 10,
    },
  },
  '@media (max-width:800px)': {
    copyRight: {
      display: 'none',
    },
  },
  '@media (max-width: 600px)': {
    scrollHorizontal: {
      overflow: 'auto',
    },
    reactPlayer: {
      height: '45vh',
    },
    searchBar: {
      width: 200,
    },
  },
});

export default youtubestyles;
