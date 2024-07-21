import React, { useState } from "react";
import { Suggestion } from "../../data/data";
import { formatDate, getUser } from "../../utils/misc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NewSuggestionModal from "../NewSuggestionModal";
import { useSuggestionContext } from "../../store/SuggestionContext";

interface SidePanelProps {
  suggestions: Suggestion[];
  activeSuggestion: Suggestion | null;
  onNewSuggestion: (suggestion: Suggestion) => void;
}

const SidePanel: React.FC<SidePanelProps> = () => {
  const { state, dispatch } = useSuggestionContext();
  const { suggestions, selectedSuggestion } = state;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewSuggestionClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="side-panel">
      <div className="new-suggestion" onClick={handleNewSuggestionClick}>
        <FontAwesomeIcon icon={faPenToSquare} />
        New Suggestion
      </div>
      <div className="side-panel-items">
        {suggestions.map((suggestion) => {
          const user = getUser(suggestion.userId);
          const isActive =
            selectedSuggestion &&
            selectedSuggestion.conversationId === suggestion.conversationId;
          return (
            <div
              className={`suggestion-item ${isActive ? "active" : ""}`}
              key={suggestion.conversationId}
              onClick={() => dispatch({ type: "SELECT_SUGGESTION", payload: suggestion })}
            >
              <div className="title">{suggestion.title}</div>
              <div className="small">{formatDate(suggestion.timestamp)}</div>
              <div className="person">
                <span>
                  <div className="initials">{user.initials}</div>
                </span>
                <span className="small">{user.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <NewSuggestionModal
          onClose={handleCloseModal}
          onSave={(suggestion: Suggestion) => {
            dispatch({ type: "ADD_SUGGESTION", payload: suggestion });
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default SidePanel;
