import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Refer from './components/Refer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <div className="my-12 max-w-[1000px] m-auto">
            <div className="path bg-white px-3 py-2 rounded-lg my-4">
              UI/UX &gt; Refer & Earn
            </div>
            <Home />
            <div className='flex flex-col base-text items-start space-y-4 mt-5 px-3'>
              <Link to="/refer" className="cursor-pointer">Friends Who Enrolled</Link>
              <button>Terms & Conditions</button>
            </div>
          </div>
        </Route>
        <Route exact path="/refer" >
          <div className="my-12 max-w-[1000px] m-auto">
            <div className="path bg-white px-3 py-2 rounded-lg my-4">
              UI/UX &gt; Refer & Earn &gt; Friends Referred
            </div>
            <Refer />
            <div className='flex flex-col base-text items-start space-y-4 mt-5 px-3'>
              <button>Terms & Conditions</button>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
