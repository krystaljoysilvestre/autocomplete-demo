import React, { useState } from "react";

import { Container, Label, Switch as SliderSwitch, Slider } from "./style";

interface SwitchProps {
  label: string;
  onChange: (isChecked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <SliderSwitch
        checked={isChecked}
        onClick={handleToggle}
      >
        <Slider className={`slider ${isChecked ? "on" : "off"}`} />
      </SliderSwitch>
    </Container>
  );
};

export default Switch;
