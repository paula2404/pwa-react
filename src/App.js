import {  Switch, Route, BrowserRouter as Router  } from 'react-router-dom'
import './index.css';

import Converter from './pages/Converter';
import Currencies from './pages/Currencies';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Converter} />
        <Route path="/valute" exact component={Currencies} />
      </Switch>
    </Router>
  );
}

export default App;
