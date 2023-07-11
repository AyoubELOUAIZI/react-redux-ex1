import './App.css';
import { ChangColor } from './components/ChangColor';
import { Login } from './components/Login';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
   
      <Profile />
      <Login />
      <ChangColor />
    </div>
  );
}

export default App;
