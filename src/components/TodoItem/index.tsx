import React, { memo } from "react";
import { ITodo } from "../../screens/Home";

import { Check } from "phosphor-react-native";
import { Btn, Container, Title, Wrapper } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

interface TodoProps {
  data: ITodo;
}

const BaseComponent = ({ data }: TodoProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Wrapper>
        <Title>{data.title}</Title>
      </Wrapper>

      <Btn completed={data.completed}>
        <Check color={theme.colors.background} size={RFValue(24)} />
      </Btn>
    </Container>
  );
};

export const TodoItem = memo(BaseComponent, (prevItem, nextItem) => {
  return (
    prevItem.data.id === nextItem.data.id &&
    prevItem.data.completed === nextItem.data.completed
  );
});
