import React from "react";
import "./App.css";
import Home from "./pages/HomePage/Home";
import Fifa from "./pages/FIFA/Fifa";
import Projects from "./pages/Projects/Projects";
import Login from "./pages/Login/Login";
import Hidden from "./pages/HiddenLogin/Hidden";
import Footer from "./pages/Footer.js/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { detect } from "detect-browser";

class App extends React.Component {
    constructor(props) {
        super(props);

        const browser = detect();

        if (browser && browser.name === "ie") {
            console.log("Hello my friend from the middle age.");
        }
    }

    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/fifa" component={Fifa} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/hidden" component={Hidden} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
