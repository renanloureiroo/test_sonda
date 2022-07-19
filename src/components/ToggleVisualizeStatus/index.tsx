import React from "react";

import { Btn, BtnTitle, Container, Divider } from "./styles";

interface ToggleVisualizeStatusProps {
  onPress: (status: boolean) => void;
  statusActive: boolean;
}

export const ToggleVisualizeStatus = ({
  onPress,
  statusActive,
}: ToggleVisualizeStatusProps) => {
  return (
    <Container>
      <Btn onPress={() => onPress(true)}>
        <BtnTitle isActive={statusActive}>Completas </BtnTitle>
      </Btn>
      <Divider />
      <Btn onPress={() => onPress(false)}>
        <BtnTitle isActive={!statusActive}>Pendentes</BtnTitle>
      </Btn>
    </Container>
  );
};
