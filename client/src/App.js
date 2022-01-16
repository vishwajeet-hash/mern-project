import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Register</h1>
      <form>
        <Input type='text' placeholder="Name"/>
        <Input type='text' placeholder="Email"/>
        <Input type='password' placeholder="Password"/>

      </form>
    </div>
  );
}

export default App;
