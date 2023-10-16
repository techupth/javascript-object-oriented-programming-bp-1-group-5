

//  Start coding here
class User {
    constructor(id, name, email){
        this.id = id
        this.name = name
        this.email = email
    }
}

class PostList{
    constructor(posts){
        this.posts = posts
    }
    addpost(newPost){
        this.posts += newPost
    }
    sharePost(titlePost){
        this.posts = titlePost
        console.log(`You've shared post “${titlePost}” to your friend.`)

    }
}

class Post {
    constructor(id, title, content, comment){
        this.id = id
        this.title = title
        this.content = content
        this.comment = comment
    }
    addComment(newComment){
        this.comment += newComment
    }
        
}

class Comment {
    constructor(id, content, createdBy, like){
        this.id = id
        this.content = content
        this.createdBy = createdBy
        this.like = like
    }
    addLike(newLike){
        this.like += newLike
    }
}


class Facebook {
    constructor(groupList,pageList){
        this.groupList = groupList
        this.pageList = pageList
    }
    addGroup(newFbGroup){
        this.groupList += newFbGroup
    }
    addPage(newFbPage){
        this.pageList += newFbPage
    }
}

class FacebookPage{
    constructor(name){
        this.name = name
    }
}

class FacebookGroup {
    constructor(name){
        this.name = name
    }
}

class Notification {
    constructor(id){
        this.id = id
    }

    send(displayNotifiacation){
        this.post = displayNotifiacation
        console.log(`Notification: <comment-createdBy> has just commented on this post—"<post-title>”`)
    }
}

// ต้องดูก่อนว่าอะไรเหมือนกันบ้าง แบบว่าใช้ข้อมูลเดียวกัน แล้วจากนั้นใช้ inheritance จากนั้นดูว่า อันไหนที่มีเพิ่มนอกเนื้อจากที่ซ้ำ ก็เพิ่มเข้าไป 