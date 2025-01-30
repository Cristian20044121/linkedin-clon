import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Feed } from "./Feed";
import { Login } from "./Login"; // Asegúrate de tener este componente creado e importado
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

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

          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
