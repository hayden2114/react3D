import React, { Component } from 'react';

import "../styles/threeD.css";

export default class ThreeD extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="threeD-header">
              Welcome to the 3D Scene!
            </div>
            <div className="scene-container">
              <a-scene embedded>
                <a-assets>
                </a-assets>

                <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
                <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
                <a-plane position="0 0 -4" rotation="-90 0 0" width="14" height="14" color="#7BC8A4"></a-plane>
                <a-sky color="#ECECEC"></a-sky>
              </a-scene>
            </div>
        </React.Fragment>
    )
  }
}
