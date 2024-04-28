import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const modalStyles = () => {
    const [fontsLoaded] = useFonts({
        'LongCang-Regular': require('../../assets/fonts/LongCang-Regular.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });

    const style = StyleSheet.create({
        modal:{
            width: '80%',
            height: 315,
            backgroundColor: '#0f53bb',
            marginTop: 80,
            marginRight: 20,
            alignSelf: 'flex-end',
            borderRadius: 20,
            elevation: 5, // Add elevation for box shadow (Android)
            shadowColor: '#000', // iOS
            shadowOpacity: 0.3, // iOS
            shadowRadius: 5, // iOS
            shadowOffset: { width: 2, height: 5 }, // iOS
        },
        modalHeader:{
            flexDirection: 'row'
        },
        textHeader: {
            flex: 1,
            margin: 15,
            padding: 5,
            fontFamily: fontsLoaded ? 'Montserrat-Regular' : 'System',
            fontSize: 16,
            color: 'white'
        },
        closeBtn:{
            flex: 2,
            margin: 10,
            padding: 5,
        },
        modalBody: {
            backgroundColor: 'green',
            height: 260,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        },
        colContainer: {
            borderRadius: 20,
        },
        column:{
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingTop: 15,
            paddingBottom: 12,
            marginTop: 0,
            height: 65,
            borderBottomColor: '#898989',
            borderBottomWidth: .4
        },
        colImage:{
            width: 40,
            height: 40,
            borderRadius: 40,
            marginLeft: 10,
            marginBottom: 5,
            justifyContent: 'center',
            alignSelf: 'center'
        },  
        colText:{
            marginLeft: 10,
            marginTop: -5,
            color: 'black',
        }
    });
    return style;
}

export default modalStyles;