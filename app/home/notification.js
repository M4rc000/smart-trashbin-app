import React, { useEffect } from 'react';
import { Notifications } from 'react-native-notifications';

const NotificationComponent = () => {
    useEffect(() => {
        // Register for remote notifications
        Notifications.registerRemoteNotifications();

        // Register for notification received in foreground
        const onNotificationReceivedForeground = (notification, completion) => {
            console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
            completion({ alert: false, sound: false, badge: false });
        };
        Notifications.events().registerNotificationReceivedForeground(onNotificationReceivedForeground);

        // Register for notification opened
        const onNotificationOpened = (notification, completion) => {
            console.log(`Notification opened: ${notification.payload}`);
            completion();
        };
        Notifications.events().registerNotificationOpened(onNotificationOpened);

        // Clean up function
        return () => {
            // Unregister event listeners
            Notifications.events().unregisterNotificationReceivedForeground(onNotificationReceivedForeground);
            Notifications.events().unregisterNotificationOpened(onNotificationOpened);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default NotificationComponent;