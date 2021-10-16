import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import CharacterDetails from "./pages/CharacterDetails";
import CharacterList from "./pages/CharacterList";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/:id" component={CharacterDetails} />
        <Route path="/" component={CharacterList} />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
