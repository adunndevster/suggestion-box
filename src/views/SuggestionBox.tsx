import React, { useEffect, useState } from "react";
import ChatArea from "./components/ChatArea";
import SidePanel from "./components/SidePanel";
import { UserComment, Suggestion, currentUser, conversations, users } from "../data/data";
import { paragraph, sentence } from "txtgen";

const SuggestionBox: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null);
  const [comments, setComments] = useState<UserComment[]>([]);

  const handleSuggestionClick = async (suggestion: Suggestion) => {
    setSelectedSuggestion(suggestion);
    await getSelection(suggestion.conversationId);
  };

  const getSelection = async (id: string) => {
    try {
      const response = await fetch(`/api/conversations?id=${id}`);
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleNewComment = async (text: string) => {
    if (!selectedSuggestion) return;
    try {
      await fetch("/api/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversationId: selectedSuggestion.conversationId,
          text,
          userId: currentUser.id,
        }),
      });
      await getSelection(selectedSuggestion.conversationId);
    } catch (error) {
      console.error("Error posting new comment:", error);
    }
  };

  const handleNewSuggestion = async (suggestion: Suggestion) => {
    try {
      await fetch("/api/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(suggestion),
      });
      setSuggestions(prevSuggestions => [...prevSuggestions, suggestion]);
    } catch (error) {
      console.error("Error creating new suggestion:", error);
    }
  };

  const addRandomSuggestion = async () => {
    const timestamp = new Date();
    const conversationId = (Object.keys(conversations).length + 1).toString();
    const userId = (Math.ceil(Math.random() * Object.keys(users).length)).toString();
    const suggestion: Suggestion = {
      title: sentence(),
      description: paragraph(),
      timestamp,
      userId,
      conversationId,
    };
    await handleNewSuggestion(suggestion);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch("/api/suggestions");
        const data = await response.json();
        setSuggestions(data.suggestions);
        if (data.suggestions.length > 0) {
          const firstSuggestion = data.suggestions[0];
          setSelectedSuggestion(firstSuggestion);
          await getSelection(firstSuggestion.conversationId);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };
    fetchSuggestions();

    const interval = setInterval(async () => {
      await addRandomSuggestion();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="suggestion-box">
      <SidePanel
        suggestions={suggestions}
        activeSuggestion={selectedSuggestion}
        onSuggestionClick={handleSuggestionClick}
        onNewSuggestion={handleNewSuggestion}
      />
      <ChatArea
        suggestion={selectedSuggestion}
        comments={comments}
        onNewComment={handleNewComment}
      />
    </div>
  );
};

export default SuggestionBox;
