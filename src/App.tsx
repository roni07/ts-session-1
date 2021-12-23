import React, {useState} from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// interface Address {
//   title: string,
//   location: string
// }

export interface User {
  userId: number,
  id: number,
  title: string,
  // address: Address | null
}

const App: React.FC = () => {

  // const [user, setUser] = useState<User>({
  //   userId: 0,
  //   id: 1,
  //   title: "Hello",
  //   completed: false,
  // });

  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = (user: User) => {
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <TodoForm
          handleSubmit={handleSubmit}
          // setUsers={setUsers}
      />
      <TodoList users={users}/>
    </div>
  );
}

export default App;
