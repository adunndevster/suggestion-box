interface Comment {
    userId: number;
    text: string;
}

interface Suggestion {
    title: string;
    description: string;
    userId: number;
    comments: Comment[];
}

interface CurrentUser {
    id: string;
    initials?: string;
}

interface AppData {
    currentUser: CurrentUser;
    suggestions: Suggestion[];
}

interface Comment {
    userId: number;
    text: string;
}

interface Suggestion {
    title: string;
    description: string;
    userId: number;
    comments: Comment[];
}

interface CurrentUser {
    id: string;
}

interface AppData {
    currentUser: CurrentUser;
    suggestions: Suggestion[];
}

export const appData: AppData = {
    currentUser: {
        id: '1',
    },
    suggestions: [
        {
            title: "Root needs a mascot",
            description: "I think root needs a mascot. Any ideas?",
            userId: 1,
            comments: [
                {
                    userId: 2,
                    text: "Wow, this is a great idea!"
                },
                {
                    userId: 3,
                    text: "Yes, I think a mascot would be awesome!"
                },
                {
                    userId: 1,
                    text: "Thanks for the feedback. Let's brainstorm some ideas."
                },
            ]
        },
        {
            title: "Add a dark mode",
            description: "Can we have a dark mode? It would be easier on the eyes at night.",
            userId: 2,
            comments: [
                {
                    userId: 1,
                    text: "A dark mode would be a fantastic addition."
                },
                {
                    userId: 3,
                    text: "I support this suggestion! Dark mode FTW!"
                }
            ]
        },
        {
            title: "Integration with 3rd party apps",
            description: "We should integrate with more 3rd party apps to enhance community interaction.",
            userId: 3,
            comments: [
                {
                    userId: 4,
                    text: "Absolutely, this would allow for much more interaction!"
                },
                {
                    userId: 5,
                    text: "Which apps are you thinking about?"
                },
                {
                    userId: 3,
                    text: "Maybe collaboration tools like Trello or Notion?"
                }
            ]
        },
        {
            title: "Better notification system",
            description: "Improve the notification system to make it more customizable.",
            userId: 4,
            comments: [
                {
                    userId: 2,
                    text: "Yes, notifications can get overwhelming."
                },
                {
                    userId: 1,
                    text: "What kind of customizations would you like to see?"
                }
            ]
        },
        {
            title: "Enhanced voice chat features",
            description: "Introduce features like noise suppression and voice modulation in voice chats.",
            userId: 5,
            comments: [
                {
                    userId: 3,
                    text: "Noise suppression would be a game changer!"
                },
                {
                    userId: 4,
                    text: "Voice modulation sounds fun, we could have different effects!"
                }
            ]
        },
        {
            title: "Custom emoji support",
            description: "Allow users to upload and use custom emojis in their chats.",
            userId: 6,
            comments: [
                {
                    userId: 1,
                    text: "This would definitely add a personal touch to our messages."
                },
                {
                    userId: 2,
                    text: "I can’t wait to see what emojis people come up with!"
                }
            ]
        },
        {
            title: "Mobile app enhancements",
            description: "Enhance the mobile app for a better user experience.",
            userId: 7,
            comments: [
                {
                    userId: 5,
                    text: "What kind of enhancements are you thinking of?"
                },
                {
                    userId: 6,
                    text: "Improved performance and a more intuitive interface."
                }
            ]
        },
        {
            title: "Introduce a feedback system",
            description: "Implement a system where users can easily provide feedback and report bugs.",
            userId: 8,
            comments: [
                {
                    userId: 3,
                    text: "Great idea, user feedback is crucial for improvement."
                },
                {
                    userId: 4,
                    text: "Maybe add a voting system for suggestions?"
                }
            ]
        },
        {
            title: "Gamify the user experience",
            description: "Introduce gamification elements like badges and leaderboards to engage users.",
            userId: 9,
            comments: [
                {
                    userId: 2,
                    text: "Gamification can make the platform more engaging!"
                },
                {
                    userId: 7,
                    text: "I would love to earn badges for my contributions."
                }
            ]
        },
        {
            title: "Improve security features",
            description: "Enhance security features to protect user data and privacy.",
            userId: 10,
            comments: [
                {
                    userId: 6,
                    text: "Security is always a top priority. Good suggestion!"
                },
                {
                    userId: 1,
                    text: "Any specific security features you have in mind?"
                }
            ]
        }
    ]
};


export var users = {
    "1": {
        name: "Me Me",
        initials: "MM"
    },
    "2": {
        name: "Lynette Marvin",
        initials: "LM"
    },
    "3": {
        name: "Geneva Dicki",
        initials: "GD"
    },
    "4": {
        name: "Dr. Jesus Mertz",
        initials: "DJ"
    },
    "5": {
        name: "Enrique Mayor",
        initials: "EM"
    },
    "6": {
        name: "Steve Blanda",
        initials: "SB"
    }
}