class UserNoti {
    constructor(id, name, email,title, content, createdBy, comment, like,groupList,pageList,posts){
        this.id = id
        this.name = name
        this.email = email
        this.title = title
        this.content = content
        this.createdBy = createdBy
        this.comment = comment
        this.like = like
        this.groupList = groupList
        this.pageList = pageList
        this.post = posts
    }
}

class User extends UserNoti{
    constructor(id,name,email){
        super(id,name,email)
    }
}

class PostList extends UserNoti{
    constructor(id,name,email,title,posts){
        super(id,name,email)
        this.title = title
        this.posts = posts
    }

    addPost(newPost){
        this.posts = newPost
    }

    sharePost(titlePost){
        this.title = titlePost
        console.log(`You've shared post "${titlePost}" to your friend`)
    }
}

class Post extends UserNoti{
    constructor(id,name,title,content,comment){
        super(id,name)
        this.title = title
        this.content = content
        this.comment = comment
    }

    addComment(newComment){
        this.comment += newComment
    }
}

class Comment extends UserNoti{
    constructor(id,content,createdBy,like){
        super(id)
        this.content = content    
        this.createdBy = createdBy
        this.like = like

    }
    addLike(newLike){
        this.like += newLike
    }
}

class Facebook extends UserNoti{
    constructor(groupList,pageList){
        super() // เราลองเอาแค่ที่เขาต้องการดูว่า ถ้า Super() ไม่มีข้างในจะเป็นยังไง
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

class FacebookPage extends UserNoti{
    constructor(name){
        super()
        this.name = name
    }
}

class FacebookGroup extends UserNoti{
    constructor(name){
        super()
        this.name = name
    }
}

class Notification extends UserNoti{
    constructor(id,createdBy,posts){
        super(id)
        this.createdBy = createdBy
        this.posts = posts
    }

    send(displayNotifiacation, postDetail){
        this.posts = displayNotifiacation
        this.createdBy = postDetail
        console.log(`Notification: ${displayNotifiacation} has just comment on this post- "${postDetail}"`)
    }
}

const sentCommentNoti = new Notification()
sentCommentNoti.send("Nine","You Can Do this!!!")

const sentSharedNoti = new PostList()
sentSharedNoti.sharePost("The Last Chap of JavaScript!")