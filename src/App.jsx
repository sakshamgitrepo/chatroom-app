import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { useState } from "react";
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
          <div className="card w-100 text-center border-white">
            <div className="row">
              <div className="col-12">
                <h5>Enter Username</h5>
              </div>
              <div className="d-flex justify-content-center py-1">
                <div className="col-4 ">
                  <input
                    type="text"
                    name="username"
                    value={newUser}
                    className="form-control mb-3"
                    placeholder="Username"
                    autoComplete="off"
                    required
                    onChange={(e) => setNewUser(e.target.value)}
                    onKeyDown={(e) =>
                      e.code === "Enter" ? logNewUser() : null
                    }
                  />
                  <button type="button" className="btn btn-info w-100" onClick={logNewUser}>
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
