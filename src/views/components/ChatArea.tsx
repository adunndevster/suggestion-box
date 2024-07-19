import React from "react";
import { currentUser, Suggestion, UserComment } from "../../data/data";
import { getUser } from "../../utils/misc";
import ChatEditor from "./ChatEditor";

interface ChatAreaProps {
  suggestion: Suggestion | null;
  comments: UserComment[];
  onNewComment: (text: string) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ suggestion, comments, onNewComment }) => {
  return (
    <div className="chat-area">
      {suggestion && (
        <>
          <div className="title-area">
            <h1>{suggestion.title}</h1>
            <div className="author">
              <span className="initials">
                {getUser(suggestion.userId).initials}
              </span>
              <span>{getUser(suggestion.userId).name}</span>
            </div>
            <p>{suggestion.description}</p>
          </div>

          <div className="conversation-container">
            {comments.map((comment, index) => {
              const user = getUser(comment.userId);
              const isSelf = comment.userId === currentUser.id;
              return (
                <div key={index} className={`comment ${isSelf ? 'self' : ''}`}>
                  <div className="initials">{user.initials}</div>
                  <div className="text">{comment.text}</div>
                </div>
              );
            })}
          </div>
          <ChatEditor onSubmit={onNewComment} />
        </>
      )}
    </div>
  );
};

export default ChatArea;
