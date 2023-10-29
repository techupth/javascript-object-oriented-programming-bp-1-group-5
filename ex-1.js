class EmailNotification {
    constructor(notificationID, createdTime, content, receiver) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log("Notification has been sent to", this.receiver);
    }
}


class SMSNotification {
    constructor(notificationID, createdTime, content, phoneNumber) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log("Notification has been sent to", this.phoneNumber);
    }
}


const email = new EmailNotification("Email", "10.00:am", "Hello World!", "babu@outlook.com");
const sms = new SMSNotification("SMS", "09.00:pm", "How are you?", "0614549879");

email.send();
sms.send();
