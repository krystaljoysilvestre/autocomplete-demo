import styled from 'styled-components';

interface SwitchProps {
  readonly checked: boolean;
  onClick: (e: Event) => void;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  margin-right: 10px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.mode === "dark" ? "#807cb2" : "#8f8bb5"};
`;

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Switch = styled.div<SwitchProps>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  ${Slider} {
    ${props => props.checked && `
      background: linear-gradient(146deg, rgba(154,65,148,1) 28%, rgba(140,65,223,1) 75%);
    `}

    &:before {
      ${props => props.checked && `
        transform: translateX(26px);
      `}
    }
  }
`;
