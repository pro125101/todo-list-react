import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

const AppStateProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    handleLoadUserList();
    handleLoadTodoList();
  }, []);

  const handleLoadUserList = useCallback(async () => {
    try {
      const resultUser = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(resultUser?.data || []);
    } catch (error) {}
  }, []);

  const handleLoadTodoList = useCallback(async () => {
    try {
      const resultTodo = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodoList(resultTodo?.data || []);
    } catch (error) {}
  }, []);

  const updateTodoList = useCallback(
    (id) => {
      const todoIndex = todoList.findIndex((item) => item.id === id);
      todoList[todoIndex].completed = !todoList[todoIndex].completed;
      setTodoList([...todoList]);
    },
    [todoList]
  );

  return (
    <AppStateContext.Provider
      value={{
        userList,
        setUserList,
        todoList,
        setTodoList,
        updateTodoList,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

const AppStateContext = createContext({
  userList: [],
  setUserList: (data) => {},
  todoList: [],
  setTodoList: (data) => {},
  updateTodoList: (id, value) => {},
});
const useAppState = () => useContext(AppStateContext);

export { AppStateProvider, useAppState };
