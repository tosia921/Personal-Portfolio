import './global-styles/App.scss';
//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import HomePage from './pages/homepage/hompage.component';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
