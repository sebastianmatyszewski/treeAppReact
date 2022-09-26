import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom'

const Main = () => (
  <div className="Main">
    <Link to="smallTree">Small Tree</Link>
    <Link to="mediumTree">Medium Tree</Link>
    <Link to="bigTree">Big tree</Link>
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
