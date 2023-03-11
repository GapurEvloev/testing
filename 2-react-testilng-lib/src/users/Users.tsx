import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface UsersProps {
}

const Users: React.FC<UsersProps> = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div data-testid="users-page">
      {users.map((user: any) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};
export default Users;
