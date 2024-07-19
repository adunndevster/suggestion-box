import React, { useEffect, useRef } from "react";
import { currentUser, Suggestion, UserComment } from "../../data/data";
import { getUser } from "../../utils/misc";
import ChatEditor from "./ChatEditor";

interface ChatAreaProps {
  suggestion: Suggestion | null;
  comments: UserComment[];
  onNewComment: (text: string) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ suggestion, comments, onNewComment }) => {
  const titleAreaRef = useRef<HTMLDivElement>(null);
  const conversationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateConversationContainerHeight = () => {
      if (titleAreaRef.current && conversationContainerRef.current) {
        const titleAreaHeight = titleAreaRef.current.offsetHeight;
        conversationContainerRef.current.style.height = `calc(60vh - ${titleAreaHeight}px - 80px)`;
      }
    };

    updateConversationContainerHeight();

    window.addEventListener("resize", updateConversationContainerHeight);

    return () => {
      window.removeEventListener("resize", updateConversationContainerHeight);
    };
  }, [suggestion, comments]);

  return (
    <div className="chat-area">
      {suggestion && (
        <>
          <div ref={titleAreaRef} className="title-area">
            <h1>{suggestion.title}</h1>
            <div className="author">
              <span className="initials">
                {getUser(suggestion.userId).initials}
              </span>
              <span>{getUser(suggestion.userId).name}</span>
            </div>
            <p>{suggestion.description}</p>
          </div>

          <div ref={conversationContainerRef} className="conversation-container">
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
