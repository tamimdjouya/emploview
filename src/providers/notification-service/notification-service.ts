import { LocalNotifications } from '@ionic-native/local-notifications';

export class NotificationService {
  constructor(public localNotifications: LocalNotifications){}

  showNotificaiton(message) {
    this.localNotifications.schedule({
      id: 1,
      title: 'Emploview',
      text: message,
      icon: 'res://icon',
    });
  }
}
