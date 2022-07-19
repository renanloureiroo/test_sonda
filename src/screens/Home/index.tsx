import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  RefreshControl,
  TouchableWithoutFeedback,
} from "react-native";

import { Search } from "../../components/Search";
import { TodoItem } from "../../components/TodoItem";
import { ToggleVisualizeStatus } from "../../components/ToggleVisualizeStatus";
import { api } from "../../services/api";
import { Container, Content, Header, List, Message, Wrapper } from "./styles";

export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const Home = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const [todos, setTodos] = useState<ITodo[]>([]);

  const [todosFiltered, setTodosFiltered] = useState<ITodo[]>([]);

  const [isCompletedSelected, setIsCompletedSelected] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleChangeText = useCallback((text: string) => {
    setSearchInput(text);
  }, []);

  const handleClearSearchInput = useCallback(() => {
    setSearchInput("");
  }, []);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const response = await api.get<ITodo[]>("");
      setTodos(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filterResults = () => {
    const result = todos
      .filter((todo) =>
        todo.title.toLowerCase().includes(searchInput.toLowerCase())
      )
      .filter((todo) => todo.completed === isCompletedSelected);

    setTodosFiltered(result);
  };

  useEffect(() => {
    filterResults();
  }, [todos, searchInput, isCompletedSelected]);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Search
            value={searchInput}
            onPress={handleClearSearchInput}
            onChangeText={handleChangeText}
          />

          <ToggleVisualizeStatus
            statusActive={isCompletedSelected}
            onPress={setIsCompletedSelected}
          />
        </Header>

        <Content>
          {isLoading ? (
            <Wrapper>
              <ActivityIndicator size={"large"} />
            </Wrapper>
          ) : todosFiltered.length > 0 ? (
            <List
              data={todosFiltered}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <TodoItem data={item} />}
              refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={fetchTodos} />
              }
            />
          ) : (
            <Wrapper>
              <Message>
                Nenhum resultado que corresponda a sua pesquisa!
              </Message>
            </Wrapper>
          )}
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};
