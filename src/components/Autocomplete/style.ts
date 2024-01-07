import styled from 'styled-components';

interface AvatarProps {
  readonly color: string;
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
`;

export const StyledInput = styled.input`
  width: -webkit-fill-available;
  height: 25px;
  border-radius: 25px;
  padding: 10px 25px;
  font-size: 20px;
  outline: none;
  font-family: 'Nunito', sans-serif;
  border: 2px solid ${(props) =>
    props.theme.mode === "dark" ? "#807cb2" : "#8f8bb5"};
`;

export const Suggestions = styled.div`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const SuggestionItem = styled.div`
  width: calc(50% - 8px);
  display: flex;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 2%;
  font-weight: 700;
  color: ${(props) =>
    props.theme.mode === "dark" ? "#f2f6f0" : "#373546"};
`;

export const Avatar = styled.div<AvatarProps>`
  background: ${props => props.color};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 15px;
`;
