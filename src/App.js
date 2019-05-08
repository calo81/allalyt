import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor.js'
import StreamResult from './StreamResult.js'

function App(dependencies) {
  return (
    <div className="App">
       <Editor/>
       <StreamResult />
    </div>
  );
}

export default App;
