const data = [
    {
        title: 'Post 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../images/quiz-image.jpg',
        comments: [
            {
                username: 'Member',
                usernameImg: '../images/member.jpg',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet.'
            }
        ]
    },
    {
        title: 'Post 2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../images/quiz-image.jpg',
        comments: [
            {
                username: 'Member',
                usernameImg: '../images/member.jpg',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit.'
            }
        ]
    },
    {
        title: 'Post 3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../images/quiz-image.jpg',
        comments: [
            {
                username: 'Member',
                usernameImg: '../images/member.jpg',
                text: 'Lorem ipsum dolor sit amet.'
            }
        ]
    }
];

if (!localStorage.getItem('authorization')) {
    localStorage.setItem(
        'authorization',
        JSON.stringify({
            currentUser: null,
            allUsers: [
                {
                    username: 'misha',
                    email: 'm.alexeev2000@gmail.com',
                    password: '123',
                    sex: 'man',
                    birthday: '21.11.2000'
                }
            ]
        })
    );
}

if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify(data));
}
