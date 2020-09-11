import React, { Component } from 'react';
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


class GUI extends Component {
  render() {
    return (
        <div id="whole">
            <Button id="button">Information</Button>
            <div>
                <h1>Man its a hot one</h1>
            </div>
        </div>
  );

  }
}

export default GUI;
