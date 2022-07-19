import { ClearButton, Container, Input } from "./styles";
import { X } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
interface SearchProps {
  onChangeText: (text: string) => void;
  onPress: () => void;
  value: string;
}

export const Search = ({ onChangeText, onPress, value }: SearchProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Input placeholder="Pesquisa" value={value} onChangeText={onChangeText} />
      <ClearButton onPress={onPress}>
        <X color={theme.colors.primary_100} size={RFValue(24)} />
      </ClearButton>
    </Container>
  );
};
