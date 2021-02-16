import './global-styles/App.scss';
//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//page components
import HomePage from './pages/homepage/hompage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/projects">
          <ProjectsPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
