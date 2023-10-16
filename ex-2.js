class Notification {
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.receiver = receiver
    }
    send(name){
        this.reciver = name
        console.log(`Notification has been sent to ${name}`)
    }
}

class EmailNotification extends Notification { 
    constructor(notificationId, createdTime, content, receiver){
    super(notificationId, createdTime, content, receiver)
    }
    
}

class SMSNotification extends Notification{
    constructor(notificationId, createdTime, content, phoneNumber){
    super(notificationId, createdTime, content)
    this.receiver = 0
    }
 }

const sentEmail = new EmailNotification()
sentEmail.send("phurikanya.ch@gmail.com")

const sentPhone = new SMSNotification()
sentPhone.send("0968018433")
