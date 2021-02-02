import React from 'react'
import Exercise from './pages/Exercise'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ExerciseNewContainer from "./pages/ExerciseNewContainer";
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/exercises" component={Exercise} />
        <Route exact path="/exercises/new" component={ExerciseNewContainer}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
