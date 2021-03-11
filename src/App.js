import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Home from './components/home';

function App() {
    return ( 
        <div className="App">
            <h1>Hi World!</h1>
            <About />
            <Contact />
            <Portfolio />
        </div>
    );
}
export default App;