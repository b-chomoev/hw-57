import { useState } from 'react';

const userRoles = ['user', 'editor', 'admin'];

const UserForm = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  }

  return (
    <form>
      <h3>Add new User</h3>

      <div className='form-group mb-2'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id='name'
          name='name'
          className='form-control'
          required
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
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
        <select name="userRole" id="userRole">
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