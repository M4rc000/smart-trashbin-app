import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const homeStyles = () => {
  const [fontsLoaded] = useFonts({
    'LongCang-Regular': require('../../assets/fonts/LongCang-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
  });
  const heroWidth = parseFloat('120%'); 
  const heroHeight = parseFloat('120%'); 
  const heroSize = (heroWidth + heroHeight);

  const styles = StyleSheet.create({
    container: {

    },
    containerHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: '3%',
    },
    leftTextContainer: {
      flex: 1, 
    },
    rightTextContainer: {
      marginLeft: 'auto',
    },

    // PROFILE
    containerHero: {
      backgroundColor: '#1F41BB',
      width: '100%',
      height: 230,
      borderBottomLeftRadius: 60,
      borderBottomRightRadius: 60,
    },
    heroImage: {
      width: heroWidth, 
      height: heroHeight, 
      margin: '8%', 
      alignSelf: 'center', 
      borderColor: 'white', 
      borderWidth: 3, 
      borderRadius: heroSize
    },
    line: {
      borderBottomColor: '#DDDDDD',
      borderBottomWidth: 3,
      marginVertical: 15,
      width: 50,
      alignSelf: 'center'
    },
    containerList:{
      margin: '5%',
      marginTop: '2%'
    }
  });
  return styles;
};

export default homeStyles;