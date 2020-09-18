import React from 'react';
import './App.css';
import GUI from './components/GUI/GUI'
import Display from './components/Display/Display'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 5px 15px;
  border-radius: 2px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  float: right
`;


const Nav = () => (
    <div>

                <Link to="/">
                    <Button renderAs="button">
                        Home
                    </Button>
                </Link>
                <Link to="/about">
                    <Button renderAs="button">
                        About
                    </Button>
                </Link>
    </div>
);

const HomePage = () => <GUI></GUI>;
const AboutPage = () => <Display></Display>;


function App() {
  return (
      <Router>

          {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
          <div>
              <Nav />
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
          </div>
      </Router>
  );
}

export default App;
