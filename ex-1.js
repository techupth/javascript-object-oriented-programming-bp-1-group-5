class EmailNotification { 
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.receiver = receiver
    }

    send(email){
        this.receiver = email
        console.log(`Notification has been sent to ${email}`)
    }
}
const sentEmail = new EmailNotification()
sentEmail.send("phurikanya.ch@gmail.com")


class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber){
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.phoneNumber = phoneNumber
    }
    send(phone){
        this.phoneNumber = phone
        console.log(`Notification has been sent to ${phone}`)
    }
 }
const sentPhone = new SMSNotification()
sentPhone.send("0968018433")

// Execute from EmailNotification is 
//'Notification has been sent to phurikanya.ch@gmail.com '

//Execute from SmsNotification is
// Notification has been sent to 0968018433 