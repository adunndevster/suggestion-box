import React from "react";
import { Suggestion } from "../../data/data";
import { formatDate, getUser } from "../../utils/misc";

interface SidePanelProps {
  suggestions: Suggestion[];
  activeSuggestion: Suggestion | null;
  onSuggestionClick: (suggestion: Suggestion) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({
  suggestions,
  activeSuggestion,
  onSuggestionClick,
}) => {
  return (
    <div className="side-panel">
      {suggestions.map((suggestion) => {
        const user = getUser(suggestion.userId);
        const isActive = activeSuggestion && activeSuggestion.conversationId === suggestion.conversationId;
        return (
          <div
            className={`suggestion-item ${isActive ? 'active' : ''}`}
            key={suggestion.conversationId}
            onClick={() => onSuggestionClick(suggestion)}
          >
            <div className="title">{suggestion.title}</div>
            <div className="small">{formatDate(suggestion.timestamp)}</div>
            <div className="person">
              <span><div className="initials">{user.initials}</div></span>
              <span className="small">{user.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidePanel;
