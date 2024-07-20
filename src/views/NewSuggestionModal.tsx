import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { currentUser, Suggestion } from "../data/data";

interface NewSuggestionModalProps {
  onClose: () => void;
  onSave: (suggestion: Suggestion) => void;
}

const NewSuggestionModal: React.FC<NewSuggestionModalProps> = ({
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef<HTMLDivElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    const timestamp = new Date();
    const conversationId = (Math.random() * 10000).toString(); // generate a random id
    const userId = currentUser.id;

    const newSuggestion: Suggestion = {
      title,
      description,
      timestamp,
      userId,
      conversationId,
    };

    onSave(newSuggestion);
  };

  return (
    <div className="anti-click">
      <div className="new-suggestion-modal">
        <div className="close" onClick={onClose}>
          <FontAwesomeIcon icon={faSquareXmark} />
        </div>
        <div className="editArea">
          <h1>Enter a new suggestion</h1>
          <h3>Title</h3>
          <div className="editor-box">
            <div
              ref={titleRef}
              contentEditable
              onInput={(e) => setTitle(e.currentTarget.textContent || "")}
            ></div>
          </div>
          <h3>Suggestion</h3>
          <div className="editor-box">
            <div
              ref={suggestionRef}
              contentEditable
              onInput={(e) => setDescription(e.currentTarget.textContent || "")}
            ></div>
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NewSuggestionModal;
