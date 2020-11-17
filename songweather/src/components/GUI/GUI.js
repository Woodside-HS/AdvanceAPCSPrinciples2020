import React, { Component } from 'react';
import {Quote} from '../../api.js'
class GUI extends Component {
    Q=""
    constructor(){
        super()
        Quote("Woodside", "United States").then((quote) => {
            this.Q = quote;
            console.log(this.Q)
            this.forceUpdate();
        })
    }
    render() {
        return (
            <div id="whole">
                <div>
                    <p style={{margin: '2%'}}>{this.Q}</p>
                </div>
            </div>
      );
    }
}

export default GUI;
