import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_DURATION = 3600 * 1000; 

export const saveUserSession = async (userSession) => {
    try {
        const sessionData = {
            user: userSession,
            timestamp: Date.now(), // Save the current timestamp
        };
        await AsyncStorage.setItem('userSession', JSON.stringify(sessionData));
    } catch (error) {
        console.error('Error saving user session:', error);
    }
}

export const getUserSession = async () => {
    try {
        const userSession = await AsyncStorage.getItem('userSession');
        if (userSession !== null) {
            const parsedSession = JSON.parse(userSession);
            const currentTime = Date.now();
            if (currentTime - parsedSession.timestamp < SESSION_DURATION) {
                return parsedSession.user; // Return user if the session is still valid
            } else {
                await AsyncStorage.removeItem('userSession'); // Clear expired session
                console.log('Session expired');
            }
        } else {
            console.log('User session not found');
        }
    } catch (error) {
        console.error('Error retrieving user session:', error);
    }
    return null; // Return null if session is not found or expired
}