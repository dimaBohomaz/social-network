
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className = 'app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
      <h2>test</h2>
    </div>
  );
}


export default App;
