import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const homeStyles = () => {
  const [fontsLoaded] = useFonts({
    'LongCang-Regular': require('../../assets/fonts/LongCang-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

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
    marginLeft: 'auto', // Push to the right as much as possible
  },
});

  return styles;
};

export default homeStyles;