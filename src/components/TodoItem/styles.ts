import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface BtnProps extends BorderlessButtonProps {
  completed: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  padding: ${RFValue(4)}px ${RFValue(12)}px;
  border-radius: ${RFValue(12)}px;
  height: ${RFValue(50)}px;
  margin-bottom: ${RFValue(16)}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;
export const Wrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text``;

export const Btn = styled(BorderlessButton)<BtnProps>`
  align-items: center;
  justify-content: center;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;

  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme, completed }) =>
    completed ? theme.colors.completed : theme.colors.pending};
`;
