import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Contact from './components/contact';

function App() {
    return ( 
        <div className="App">
            <h1>Hi World!</h1>
            <About/>
            <Contact/>
        </div>
    );
}
export default App;