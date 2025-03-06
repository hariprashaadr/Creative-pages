// import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';
import ReqAuth from './Components/ReqAuth';
import Product from './Components/Product';
import Services from './Components/Services';
import PostTable from './Components/PostTable';
import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      {/* <Home/> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/profile' element={<ReqAuth><Profile/></ReqAuth>}/>
      <Route path='/posttable' element={<PostTable/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

      </Routes>

    </div>
  );
}

export default App;
