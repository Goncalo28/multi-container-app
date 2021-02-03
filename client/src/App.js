import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header style={{ paddingBottom: '5em', paddingTop: '2em' }}>
          <Link to='/' style={{ marginRight: 15 }}>Home</Link>
          <Link to='/otherpage'>Other Page</Link>
        </header>
        <div>
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
