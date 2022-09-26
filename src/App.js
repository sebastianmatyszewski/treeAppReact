import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main.js';
import FirebaseConfig from './firebase_config'
import Generated_tree from './components/Generated_tree/Generated_tree'
import SmallTree from './components/Display_small_tree/Display_small_tree'
import MediumTree from './components/Display_medium_tree/Display_medium_tree'
import BigTree from './components/Display_big_tree/Display_big_tree'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/generatedTree" element={<Generated_tree/>} />
        <Route exact path="/smallTree" element={<SmallTree/>} />
        <Route exact path="/mediumTree" element={<MediumTree/>} />
        <Route exact path="/bigTree" element={<BigTree/>} />
      </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <h1>Działa</h1>
);

export default App;
