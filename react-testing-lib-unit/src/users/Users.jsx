import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

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
    <div
      data-testid={"users-page"}
    >
      <ul>
      {
        users.map(user => <li key={user.id}>
          <Link
            to={`/users/${user.id}`}
            data-testid="user-item"
          >
            {user.name}
          </Link>
        </li>)
      }
      </ul>
    </div>
  );
};

export default Users;