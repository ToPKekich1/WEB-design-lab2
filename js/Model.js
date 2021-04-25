class Model {
    constructor() {
        const authorization = JSON.parse(localStorage.getItem('authorization'));
        this.currentUser = authorization.currentUser;
        this.allUsers = authorization.allUsers;
        this.posts = JSON.parse(localStorage.getItem('posts'));
    }

    getPosts = () => this.posts;

    getPost = id => this.posts[id];

    addNewPost = post => {
        this.posts.push(post);
        localStorage.setItem('posts', JSON.stringify(this.posts));
    };

    addNewComment = (id, newComment) => {
        this.posts[id].comments.push(newComment);
        localStorage.setItem('posts', JSON.stringify(this.posts));
    };

    addNewUser = user => {
        this.allUsers.push(user);
        this.currentUser = user;
        localStorage.setItem(
            'authorization',
            JSON.stringify({ currentUser: this.currentUser, allUsers: this.allUsers })
        );
    };

    setCurrentUser = user => {
        const existedUser = this.allUsers.find(u => user.email === u.email && user.password === u.password);
        if (existedUser) {
            this.currentUser = existedUser;
            localStorage.setItem(
                'authorization',
                JSON.stringify({ currentUser: this.currentUser, allUsers: this.allUsers })
            );
            return true;
        } else return false;
    };

    logoutCurrentUser = () => {
        this.currentUser = null;
        localStorage.setItem(
            'authorization',
            JSON.stringify({ currentUser: this.currentUser, allUsers: this.allUsers })
        );
    };
}
