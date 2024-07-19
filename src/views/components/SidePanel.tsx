import React from "react";
import { Suggestion } from "../../data/data";
import { formatDate, getUser } from "../../utils/misc";

interface SidePanelProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({
  suggestions,
  onSuggestionClick,
}) => {
  return (
    <div className="side-panel">
      {
      suggestions.map((suggestion) => {
        var user = getUser(suggestion.userId);
        return(
        <div
          className="suggestion-item"
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
      )})}
    </div>
  );
};

export default SidePanel;
