// import CardList from "../components/card/CardList";
// import Game from "../components/tictactoe/Game";
// import ToggleClick from "../components/toggle/ToggleClick";
// import TodoList from "../components/todolist/TodoList";
// import Photos from "../components/photo/Photos";
// import TwoWayBinding from "../components/twowaybinding/TwoWayBinding";
// import Timer from "../components/contents/Timer";
// import Counter from "../components/counter/Counter";
// import Header from "../components/header/Header";
// import Click from "../components/contents/Click";

import UseMemo from "../components/todolist/UseMemo";
// import Paragraph from "../components/theme/Paragraph";
// import Theme from "../components/theme/Theme";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//parent component
function App() {
  return (
    <div>
      <UseMemo></UseMemo>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
