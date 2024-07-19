import React, { useEffect, useState } from 'react';
import ChatArea from './components/ChatArea';
import SidePanel from './components/SidePanel';
import { UserComment, Suggestion } from '../data/data';

const SuggestionBox: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null);
  const [comments, setComments] = useState<UserComment[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('/api/suggestions');
        const data = await response.json();
        setSuggestions(data.suggestions);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
    fetchSuggestions();
  }, []);

  const handleSuggestionClick = async (suggestion: Suggestion) => {
    setSelectedSuggestion(suggestion);
    try {
      const response = await fetch(`/api/conversations?id=${suggestion.conversationId}`);
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <div className='suggestion-box'>
      <SidePanel suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
      <ChatArea suggestion={selectedSuggestion} comments={comments} />
    </div>
  );
};

export default SuggestionBox;
