class View {
    renderPostComponent = (id, post) => {
        const elem = document.createElement('div');
        elem.classList.add('card', 'mb-5', 'bg-info');
        elem.innerHTML = `
                <div class="row no-gutters">
                    <div class="col-md-4 p-0">
                        <img src="${post.img}" class="card-img"
                            alt="quiz-image" style="min-height: 300px;">
                    </div>
                    <div class="col-md-8 text-light">
                        <div class="card-body d-flex  flex-column">
                            <div class="div p-2">
                                <h2 class="card-title">${post.title}</h2>
                                <p class="card-text">${post.description}</p>
                            </div>
                            <div class="d-flex justify-content-end mt-md-5">
                            <a href="./post.html?post=${id}" class="btn btn-primary px-3 py-2">
                                    See more</a>
                            </div>
                        </div>
                    </div>
            </div>`;
        return elem;
    };

    renderPostInfo = (title, img, description) => {
        const elem = document.createElement('div');
        elem.classList.add('row', 'flex-column', 'flex-lg-row', 'text-dark');
        elem.innerHTML = `
                <div class="col-12 jumbotron order-2">
                    <h1 class="display-1 fw-bold">${title}</h1>
                    <p class="lead">
                        ${description}
                    </p>
                </div>
                <div class="row justify-content-center ">
                <img src="${img}" class="col-12 col-lg-6  img-fluid order-1" alt="Responsive image" />
                </div>
                `;
        return elem;
    };

    renderCommentComponent = (username, usernameImg, text) => {
        const elem = document.createElement('div');
        elem.classList.add('rounded', 'row', 'justify-content-md-center', 'bg-dark', 'text-light', 'mb-3');
        elem.innerHTML = `
        <div class="col-12 pb-3">
                    <img src="${usernameImg}" alt="avatar" class="mt-3 rounded-circle" width="70" />
                </div>
                <div class="col-12 text-start">
                    <div class="row">
                        <div class="col  mx-2">
                            <h4>${username}</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="col text-wrap">
                                ${text}
                            </p>
                        </div>
                    </div>
                </div>`;
        return elem;
    };

    renderMessageAboutEmptyComments = () => {
        const elem = document.createElement('h2');
        elem.innerHTML = 'No comments';
        document.querySelector('#comments-container').appendChild(elem);
    };

    renderLogoutButton = () => {
        const elem = document.createElement('a');
        elem.classList.add('nav-link');

        elem.innerHTML = 'Logout';
        return elem;
    };
}
