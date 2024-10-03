import React, { useState } from 'react';
import { IUser, IUserMutation } from '../../types';

const userRoles = ['user', 'editor', 'admin'];

interface Props {
  addNewUser: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({addNewUser}) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: '',
    email: '',
    isActive: false,
    userRole: '',
  });
  const [checked, setChecked] = useState(false);

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewUser(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  };

  const handleChange = () => {
    setChecked(!checked);
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newUser.name.trim().length === 0 && newUser.email.trim().length === 0 && newUser.userRole.trim().length === 0) {
      alert('Please, fill in the blanks');
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
        isActive: checked,
      });

      setNewUser({
        name: '',
        email: '',
        isActive: false,
        userRole: '',
      })
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new User</h3>

      <div className='form-group mb-2'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={newUser.name}
          onChange={changeUser}
          id='name'
          name='name'
          className='form-control'
          required
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={newUser.email}
          onChange={changeUser}
          id='email'
          name='email'
          className='form-control'
          required
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor="status" className='me-2'>Active?</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          id="status"
          name="status"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="userRole" className='me-2'>User Role:</label>
        <select name="userRole" id="userRole" value={newUser.userRole} onChange={changeUser}>
          <option value="">Select your role</option>
          {userRoles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      <button className='btn btn-dark mt-2'>Add User</button>
    </form>
  );
};

export default UserForm;