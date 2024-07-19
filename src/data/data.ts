export interface UserComment {
    userId: string;
    text: string;
}

export interface Suggestion {
    title: string;
    description: string;
    timestamp: Date;
    userId: number;
    conversationId: string;
}

export interface CurrentUser {
    id: string;
    initials?: string;
}

export interface AppData {
    currentUser: CurrentUser;
    suggestions: Suggestion[];
}

export const conversations: { [key: string]: UserComment[] } = {
    "1": [
        {
            userId: "2",
            text: "Wow, this is a great idea!"
        },
        {
            userId: "3",
            text: "Yes, I think a mascot would be awesome!"
        },
        {
            userId: "1",
            text: "Thanks for the feedback. Let's brainstorm some ideas."
        }
    ],
    "2": [
        {
            userId: "1",
            text: "A dark mode would be a fantastic addition."
        },
        {
            userId: "3",
            text: "I support this suggestion! Dark mode FTW!"
        }
    ],
    "3": [
        {
            userId: "4",
            text: "Absolutely, this would allow for much more interaction!"
        },
        {
            userId: "5",
            text: "Which apps are you thinking about?"
        },
        {
            userId: "3",
            text: "Maybe collaboration tools like Trello or Notion?"
        }
    ],
    "4": [
        {
            userId: "2",
            text: "Yes, notifications can get overwhelming."
        },
        {
            userId: "1",
            text: "What kind of customizations would you like to see?"
        }
    ],
    "5": [
        {
            userId: "3",
            text: "Noise suppression would be a game changer!"
        },
        {
            userId: "4",
            text: "Voice modulation sounds fun, we could have different effects!"
        }
    ],
    "6": [
        {
            userId: "1",
            text: "This would definitely add a personal touch to our messages."
        },
        {
            userId: "2",
            text: "I can’t wait to see what emojis people come up with!"
        }
    ],
    "7": [
        {
            userId: "5",
            text: "What kind of enhancements are you thinking of?"
        },
        {
            userId: "6",
            text: "Improved performance and a more intuitive interface."
        }
    ],
    "8": [
        {
            userId: "3",
            text: "Great idea, user feedback is crucial for improvement."
        },
        {
            userId: "4",
            text: "Maybe add a voting system for suggestions?"
        }
    ],
    "9": [
        {
            userId: "2",
            text: "Gamification can make the platform more engaging!"
        },
        {
            userId: "7",
            text: "I would love to earn badges for my contributions."
        }
    ],
    "10": [
        {
            userId: "6",
            text: "Security is always a top priority. Good suggestion!"
        },
        {
            userId: "1",
            text: "Any specific security features you have in mind?"
        }
    ]
};

export const appData: AppData = {
    currentUser: {
        id: "1",
    },
    suggestions: [
        {
            title: "Root needs a mascot",
            description: "I think root needs a mascot. Any ideas?",
            timestamp: new Date("2024-01-01T10:00:00Z"),
            userId: 1,
            conversationId: "1",
        },
        {
            title: "Add a dark mode",
            description: "Can we have a dark mode? It would be easier on the eyes at night.",
            timestamp: new Date("2024-02-15T11:30:00Z"),
            userId: 2,
            conversationId: "2",
        },
        {
            title: "Integration with 3rd party apps",
            description: "We should integrate with more 3rd party apps to enhance community interaction.",
            timestamp: new Date("2024-03-10T14:45:00Z"),
            userId: 3,
            conversationId: "3",
        },
        {
            title: "Better notification system",
            description: "Improve the notification system to make it more customizable.",
            timestamp: new Date("2024-04-05T09:20:00Z"),
            userId: 4,
            conversationId: "4",
        },
        {
            title: "Enhanced voice chat features",
            description: "Introduce features like noise suppression and voice modulation in voice chats.",
            timestamp: new Date("2024-05-21T16:00:00Z"),
            userId: 5,
            conversationId: "5",
        },
        {
            title: "Custom emoji support",
            description: "Allow users to upload and use custom emojis in their chats.",
            timestamp: new Date("2024-06-11T13:15:00Z"),
            userId: 6,
            conversationId: "6",
        },
        {
            title: "Mobile app enhancements",
            description: "Enhance the mobile app for a better user experience.",
            timestamp: new Date("2024-07-02T18:45:00Z"),
            userId: 7,
            conversationId: "7",
        },
        {
            title: "Introduce a feedback system",
            description: "Implement a system where users can easily provide feedback and report bugs.",
            timestamp: new Date("2024-08-19T12:30:00Z"),
            userId: 8,
            conversationId: "8",
        },
        {
            title: "Gamify the user experience",
            description: "Introduce gamification elements like badges and leaderboards to engage users.",
            timestamp: new Date("2024-09-23T17:10:00Z"),
            userId: 9,
            conversationId: "9",
        },
        {
            title: "Improve security features",
            description: "Enhance security features to protect user data and privacy.",
            timestamp: new Date("2024-10-30T08:55:00Z"),
            userId: 10,
            conversationId: "10",
        }
    ]
};

export const users = {
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
    },
    "7": {
        name: "Dana White",
        initials: "DW"
    },
    "8": {
        name: "Morgan Gray",
        initials: "MG"
    },
    "9": {
        name: "Patricia Lane",
        initials: "PL"
    },
    "10": {
        name: "Samuel Black",
        initials: "SB"
    }
};
