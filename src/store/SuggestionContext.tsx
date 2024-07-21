import React, { createContext, useReducer, ReactNode } from "react";
import { Suggestion } from "../data/data";

interface SuggestionState {
  suggestions: Suggestion[];
  selectedSuggestion: Suggestion | null;
}

type Action =
  | { type: "SET_SUGGESTIONS"; payload: Suggestion[] }
  | { type: "ADD_SUGGESTION"; payload: Suggestion }
  | { type: "SELECT_SUGGESTION"; payload: Suggestion | null };

const initialState: SuggestionState = {
  suggestions: [],
  selectedSuggestion: null,
};

const SuggestionContext = createContext<{
  state: SuggestionState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const suggestionReducer = (state: SuggestionState, action: Action): SuggestionState => {
  switch (action.type) {
    case "SET_SUGGESTIONS":
      return { ...state, suggestions: action.payload };
    case "ADD_SUGGESTION":
      return { ...state, suggestions: [...state.suggestions, action.payload] };
    case "SELECT_SUGGESTION":
      return { ...state, selectedSuggestion: action.payload };
    default:
      return state;
  }
};

export const SuggestionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(suggestionReducer, initialState);

  return (
    <SuggestionContext.Provider value={{ state, dispatch }}>
      {children}
    </SuggestionContext.Provider>
  );
};

export const useSuggestionContext = () => React.useContext(SuggestionContext);
