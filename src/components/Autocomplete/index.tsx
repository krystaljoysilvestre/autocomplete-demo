import React, { useState, ChangeEvent } from "react";

import { Wrapper, StyledInput, Suggestions, SuggestionItem, Avatar } from "./style";

interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(suggestions);

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);

    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
  };

  return (
    <Wrapper>
      <StyledInput
        type="text"
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="Search"
      />
      <Suggestions>
        {filteredSuggestions.map((suggestion) => (
          <SuggestionItem key={suggestion}>
            <Avatar color={suggestion} />
            {suggestion}
          </SuggestionItem>
        ))}
      </Suggestions>
    </Wrapper>
  );
};

export default Autocomplete;
