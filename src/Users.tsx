import React, { FC, useCallback } from 'react';
import './App.css';
import {
  useNavigate
} from 'react-router-dom';
import { users } from './usersData';

export interface User {
 id: number;
 name: string;
}

export const Users: FC = () => {
  const navigate = useNavigate();

  const handleShowUserInfo = useCallback((id: number) => {
    navigate(`/users/${id}`);
  }, [navigate]);
  
  return (
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>
          <button onClick={() => {
            handleShowUserInfo(id);
          }}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
