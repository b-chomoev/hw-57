import { IUser } from "../../types";
import React from "react";

interface Props {
  users: IUser;
}

const UserItem: React.FC<Props> = ({ users }) => {
  return (
    <div className="card mb-3 p-3">
      <div className="row justify-content-between">
        <h5 className="card-title">Name: {users.name}</h5>
        <p className="card-text">
          <span className="fw-bold">Email: </span> {users.email}
        </p>
        <p className="card-text">
          <span className="fw-bold">Active: </span>
          {users.isActive ? "Yes" : "No"}
        </p>
        <p className="card-text">
          <span className="fw-bold">Role: </span>
          {users.userRole}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
