import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';

const authStyles = () => {
  // const [fontsLoaded] = useFonts({
  //   'LongCang-Regular': require('../../assets/fonts/LongCang-Regular.ttf'),
  // });

const styles = StyleSheet.create({
  // Welcome
   container:{
    height: '100%',
    backgroundColor: '#ffff'
   },
   containerImage:{
    alignItems: 'center',
   },
   panel:{
    alignItems: 'center',
    marginTop: '-25%'
  },
  headerText:{
    textAlign: 'center',
    // fontFamily: 'Inter', 
    fontWeight: '800', 
    fontSize: 25,
    color: '#1F41BB'
   },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    marginTop: 55,
  },

  // Login
  containerHeader:{
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: '50%'
  },
  panelContainer:{
    alignItems: 'center',
    marginTop: '-40%'
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  // Register
});

  return styles;
};

export default authStyles;