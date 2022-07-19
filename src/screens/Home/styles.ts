import { ITodo } from "./index";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary_700};
`;

export const Header = styled.View`
  height: ${RFPercentage(30)}px;
  justify-content: flex-end;
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  padding-top: ${getStatusBarHeight() + RFValue(16)}px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: ${RFValue(24)}px;
  border-top-right-radius: ${RFValue(24)}px;
`;

export const List = styled(
  FlatList as new (props: FlatListProps<ITodo>) => FlatList<ITodo>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: RFValue(24) },
})`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(24)}px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(14)}px;
`;
