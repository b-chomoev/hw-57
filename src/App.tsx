import ToolBar from './components/ToolBar/ToolBar.tsx';
import UserForm from './components/UserForm/UserForm.tsx';
import Users from './components/Users/Users.tsx';
import { useState } from 'react';
import { IUser } from './types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([
    {id: '1', name: 'Beksultan', email: 'chomoevbeksultan@gmail.com', isActive: true, role: 'admin'},
  ]);

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className='container mt-4'>
        <div className='row'>
          <div className='col-6 mb-2'>
            <UserForm />
          </div>
          <div className='col-6 mb-2'>
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
