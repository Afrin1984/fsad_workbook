import { useState } from "react";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <div>
      <h1>Login Page</h1>

      <input
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button>Login</button>
    </div>
  );
}

export default Login;