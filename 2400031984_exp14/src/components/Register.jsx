import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/users/register", user);
    alert("Registered Successfully");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={e => setUser({...user, username: e.target.value})}/>
      <input placeholder="Email" onChange={e => setUser({...user, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setUser({...user, password: e.target.value})}/>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;