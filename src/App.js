import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'


// importing styles
import './App.css'

// importing pages
import Home from './Components/Home'
// import Splashscreen from './Components/SplashScreen';
import Drag from './Components/Drag.js'
// import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <DndProvider 
            backend={TouchBackend}
            options={{enableMouseEvents:true}}
            > */}
          <DndProvider backend={TouchBackend}>
            <Route  path="/" component={Home} />
            <Route exact path="/drag" component={Drag} />
            {/* <Route exact path="/drag" component={Drag} /> */}
          </DndProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
