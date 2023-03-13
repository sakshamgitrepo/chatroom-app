import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { useState } from "react";
import NewUser from "./components/NewUser";
// import { io } from "socket.io-client";

function App() {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");

  const logNewUser = () => {
    setUser(newUser);
  };
  return (
    <main className="content">
      <div className="container mt-3">
        {user ? (
          <h2>{user}</h2>
        ) : (
<NewUser newUser = {newUser} setNewUser={setNewUser} logNewUser={logNewUser}  />
        )}
      </div>
    </main>
  );
}

export default App;
