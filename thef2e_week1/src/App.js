import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Homepagenavbar from './pages/Homepagenavbar';
import Homepagefooter from './pages/Homepagefooter';

function App() {
  return (
    <Router>
      <div className="App">
        <Fragment>
          <Homepagenavbar />
          <Routes>
            <Route path="/about"></Route>
            <Route path="/account"></Route>
            <Route path="/all"></Route>
            <Route path="/lent"></Route>
            <Route path="/read"></Route>
            <Route path="/reading"></Route>
            <Route path="/twice"></Route>
            <Route path="/unread"></Route>
            <Route exact path="/" element={<Homepage />}></Route>
          </Routes>
          <Homepagefooter />
        </Fragment>
      </div>
    </Router>
  );
}

export default App;
