import { IUser } from '../../types';
import React from 'react';
import UserItem from './UserItem.tsx';

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      {users.map((user: IUser) => (
        <UserItem key={user.id} users={user}/>
      ))}
    </>
  );
};

export default Users;