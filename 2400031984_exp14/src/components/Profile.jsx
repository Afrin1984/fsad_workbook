import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({});
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${userId}`)
      .then(res => setUser(res.data));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;