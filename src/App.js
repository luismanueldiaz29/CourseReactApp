import React from 'react'
import Exercise from './pages/Exercise'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ExerciseNew from "./pages/ExerciseNew";
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/exercises" component={Exercise} />
        <Route exact path="/exercises/new" component={ExerciseNew}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
