import './App.css'
import UserCard from './components/UserCard';
import Button from './components/Button';

export default function App() {
  const users = [
    {id:1, name: "Lans del rey", email:"lana@gmail.com"},
    {id:2, name:"Mo Guanshan", email:"mountain@mail.com" },
    {id:3, name:"Nuray", email:"kiraribaka@gmail.com"},
    {id:4,name:"IU", email:"star@mail.com"},
  ];
  return (
    <div clasName="App">
      <h1>User List</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} email={user.email}/>
        ) )}
      </div>
      <Button text="Click on it!"/>
    </div>
  );
}
