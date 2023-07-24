import React, {useState, useEffect} from 'react';
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {
        users.map(user => <div key={user.id} data-testid="user-item">{user.name}</div>)
      }
    </div>
  );
};

export default Users;