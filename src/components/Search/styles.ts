import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.colors.background};

  margin: ${RFValue(16)}px 0;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: ${RFValue(4)}px ${RFValue(12)}px;
  background-color: transparent;
  font-size: ${RFValue(16)}px;
`;
export const ClearButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
`;
