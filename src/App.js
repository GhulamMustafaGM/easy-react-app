import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Home from './components/home';
import { 
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

function App() {
    return ( 
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;