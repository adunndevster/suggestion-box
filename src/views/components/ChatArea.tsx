import React from 'react';
import { Suggestion, UserComment } from '../../data/data';

interface ChatAreaProps {
  suggestion: Suggestion | null;
  comments: UserComment[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ suggestion, comments }) => {
  return (
    <div className='chat-area'>
      {suggestion && (
        <>
          <h1>{suggestion.title}</h1>
          <p>{suggestion.description}</p>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <p>User ID: {comment.userId}</p>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ChatArea;
