
import './App.css';
import AdminPage from './components/Admin/AdminPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={AdminPage} />
      </Switch>

    </Router>

  );
}

export default App;
