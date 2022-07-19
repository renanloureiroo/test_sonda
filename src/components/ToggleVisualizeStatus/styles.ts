import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
import { Text } from "react-native";

interface BtnTitleProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(12)}px;

  background-color: ${({ theme }) => theme.colors.primary_100};
`;
export const Divider = styled.View`
  width: ${RFValue(1)}px;
  height: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Btn = styled(RectButton)`
  flex: 1;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
`;

export const BtnTitle = styled(Text)<BtnTitleProps>`
  font-weight: bold;
  font-size: ${RFValue(14)}px;

  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.background : theme.colors.shape};
  `}
`;
