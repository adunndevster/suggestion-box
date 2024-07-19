import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface ChatEditorProps {
  onSubmit: (text: string) => void;
}

const ChatEditor: React.FC<ChatEditorProps> = ({ onSubmit }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = textRef.current?.textContent?.trim();
      if (text) {
        onSubmit(text);
        if(textRef.current) textRef.current.textContent = "";
      }
    }
  };

  const handleClick = () => {
    const text = textRef.current?.textContent?.trim();
    if (text) {
      onSubmit(text);
      if(textRef.current) textRef.current.textContent = "";
    }
  };

  return (
    <div className="editor">
      <div
        ref={textRef}
        contentEditable
        className="text-area"
        onKeyDown={handleKeyDown}
      ></div>
      <div className="entry-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
};

export default ChatEditor;
