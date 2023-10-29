//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class postList {
    constructor() {
        this.posts = [];
    }
    addPost(post) {
        this.posts.push(post);
    }
    sharePost(post) {
        console.log(`You've shared post “${post.title}” to your friend.`)
    }
}

class Post {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(comment) {
        this.comment.push(comment);
    }
}

class Comment {
    constructor(id, content, createdBy) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike() {
        this.like++;
    }
}

class Facebook {
    constructor() {
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(group) {
        this.groupList.push(group);
    }
    addPage(page) {
        this.pageList.push(page);
    }
}

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}

class Notification {
    constructor(id) {
        this.id = id;
    }
    send(commentCreatedBy, postTitle) {
        console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}”`);
    }
}

// ตัวอย่างการใช้งาน

const post1 = new Post("101", "First Post", "This is the content of the first post.");
const comment1 = new Comment("201", "Great post!", "Alice");
const notification1 = new Notification("301");
notification1.send(comment1.createdBy, post1.title);
