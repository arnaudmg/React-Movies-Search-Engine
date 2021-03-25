import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={MovieDetailsPage} />
      </Switch>
     </Router>
    </div>
  );
}

export default App;
