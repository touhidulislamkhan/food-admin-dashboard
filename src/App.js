
import './App.css';
import AdminPage from './components/Admin/AdminPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/food-admin-dashboard' exact component={Home} />
        <Route path='/admin' exact component={AdminPage} />
      </Switch>

    </Router>

  );
}

export default App;
