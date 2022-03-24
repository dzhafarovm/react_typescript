import React, { FC } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UsersPage from "./component/UsersPage";
import TodosPage from "./component/TodosPage";
import UserItemPage from "./component/UserItemPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Тудушки</NavLink>
      </div>

      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// <EventsExample />
//       <Card
//         onClick={(num) => console.log("click", num)}
//         variant={CardVariant.outlined}
//         width="150px"
//         height="150px"
//       >
//         <button>Кнопка</button>
//       </Card>
