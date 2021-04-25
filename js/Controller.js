class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    checkUserAuth = () => {
        if (!this.model.currentUser) {
            [...document.querySelectorAll('.profile')].map(link => (link.style.display = 'none'));
        } else {
            const logoutBtn = this.view.renderLogoutButton();
            logoutBtn.onclick = () => {
                this.model.logoutCurrentUser();
                location.replace('/index.html');
            };
            document.querySelector('#login-logout').innerHTML = '';
            document.querySelector('#login-logout').appendChild(logoutBtn);
        }
    };

    displayMainPage = () => {
        const posts = this.model.getPosts();
        posts.forEach((post, id) => {
            const postElem = this.view.renderPostComponent(id, post);
            document.querySelector('#posts-container').appendChild(postElem);
        });
    };

    displayPostInfo = id => {
        const post = this.model.getPost(id);
        const postElem = this.view.renderPostInfo(post.title, post.img, post.description);
        document.querySelector('#post-container').appendChild(postElem);
        if (!post.comments.length) {
            this.view.renderMessageAboutEmptyComments();
        } else {
            post.comments.forEach(comment => {
                const commentElem = this.view.renderCommentComponent(
                    comment.username,
                    comment.usernameImg,
                    comment.text
                );
                document.querySelector('#comments-container').appendChild(commentElem);
            });
        }

        document.querySelector('#comment-form').onsubmit = event => {
            event.preventDefault();
            const text = document.querySelector('#text').value;
            const comment = {
                username: 'Misha',
                usernameImg: '../images/my-avatar.jpg',
                text
            };
            this.model.addNewComment(id, comment);
            location.reload();
        };
    };

    setCreatePostFormEventListener = () => {
        document.querySelector('#post-form').onsubmit = () => {
            const title = document.querySelector('#title').value;
            const img = document.querySelector('#image').value;
            const description = document.querySelector('#description').value;
            const post = { title, img, description, comments: [] };
            this.model.addNewPost(post);
        };
    };

    setLoginFormEventListener = () => {
        document.querySelector('#login-form').onsubmit = () => {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const user = { email, password };
            this.model.setCurrentUser(user);
            !this.model.currentUser ? alert('Incorrect login or password') : null;
        };
    };

    setRegistrationFormEventListener = () => {
        document.querySelector('#registration-form').onsubmit = () => {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const sex = [...document.getElementsByName('sex')].find(btn => btn.checked).value;
            const birthday = document.querySelector('#birthday').value;
            const newUser = { email, password, sex, birthday };
            this.model.addNewUser(newUser);
        };
    };
}

const appController = new Controller();
appController.checkUserAuth();
