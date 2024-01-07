import React from "react";
import Switch from "./index";

export default {
  title: "Switch",
  component: Switch,
};

export const Basic = () => (
  <Switch
    label="Enable Feature"
    onChange={(isChecked) => console.log("Switch state:", isChecked)}
  />
);
