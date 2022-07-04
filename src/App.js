// import logo from './logo.svg';
import React from 'react';
import  PropTypes  from 'prop-types';
import './App.css';

function App({embedId}) {
  return (
    
    <div className="App">
      <h1>Latest Apple Product Videos</h1>
      <br></br><br></br>
      <div className='smart'>
      <h2>Smart Mobile</h2>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowhalfscreen="true"></iframe>
      <br></br><br></br>
      <h2>Smart Watch</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/MMdQ-gWBNZE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowhalfscreen="true"></iframe>
      <br></br><br></br>
      <h2>Smart Bottle</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5ZYkjRJLjy8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowhalfscreen="true"></iframe>
    </div>
    </div>
  );
}

App.propTypes={
  embedId:PropTypes.string}

export default App;
