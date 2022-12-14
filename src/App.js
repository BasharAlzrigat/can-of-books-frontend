import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
import Welcome from './Welcome'
import User from './User'
import About from './About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path='/'
            element={isAuthenticated ? <BestBooks /> : <Welcome />}
          >
          </Route>
          <Route exact path='/User' element={isAuthenticated ? <User /> : <Welcome />}>
          </Route>
          <Route exact path='/About' element={isAuthenticated ? <About /> : <Welcome />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
