import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Fifa from './pages/FIFA/Fifa';
import Projects from './pages/Projects/Projects';
import Blog from './pages/Blog/Blog';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { detect } from 'detect-browser';

class App extends React.Component {
    constructor(props) {
        super(props);

        const browser = detect();

        if (browser && browser.name === 'ie') {
            console.log('Hello my friend from the middle age.');
        }
    }

    render() {
        return (
            <Router>
                <Navbar />
                <React.StrictMode>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/fifa" component={Fifa} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/blog" component={Blog} />
                    </Switch>
                </React.StrictMode>
                <Footer />
            </Router>
        );
    }
}

export default App;
