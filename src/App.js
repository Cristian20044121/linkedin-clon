import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Feed } from "./Feed";
import { Login } from "./Login"; // Asegúrate de tener este componente creado e importado
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* HEADER */}
      <Header />

      {/* Si no hay usuario, muestra la pantalla de Login */}
      {!user ? (
        <Login />
      ) : (
        // App body
        <div className="app_body">
          {/* Sidebar */}
          <Sidebar />

          {/* Feed */}
          <Feed />

          {/* Widgets - Si necesitas agregar widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
