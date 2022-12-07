import { FC } from "react";
import {
  useParams,
} from 'react-router-dom';
import { RouteParams } from "./App";
import { users } from './usersData';

export const UserInfo: FC = () => {
  const result = useParams();
  const userId = Number(result[RouteParams.UserId]);

  const currentUser = users.find((user) => user.id === userId)

  console.log('result', result);

  if (!currentUser) {
    return (
      <div>
        Sorry, user with id {userId} was not found.
      </div>
    );
  }

  return (
    <div>
      {currentUser.name}
    </div>
  );
};
