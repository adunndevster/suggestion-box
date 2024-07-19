import React from 'react';
import { Suggestion } from '../../data/data';

interface SidePanelProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className='side-panel'>
      <ul>
        {suggestions.map(suggestion => (
          <li key={suggestion.conversationId} onClick={() => onSuggestionClick(suggestion)}>
            <p>{suggestion.title}</p>
            <p>{new Date(suggestion.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
