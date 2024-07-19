import React from "react";
import { Suggestion, UserComment } from "../../data/data";
import { getUser } from "../../utils/misc";

interface ChatAreaProps {
  suggestion: Suggestion | null;
  comments: UserComment[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ suggestion, comments }) => {
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
              return (
                <div className="comment">
                  <div className="initials">{user.initials}</div>
                  <div className="text">{comment.text}</div>
                </div>
              );
            })}
          </div>
          <div className="editor"></div>
        </>
      )}
    </div>
  );
};

export default ChatArea;
