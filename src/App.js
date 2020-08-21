import React from "react";
import "./App.css";
import { Header } from "./components";
import { About, Movies, MovieDetails } from "./pages";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Movies} />
        {/* <Route path="/:id" component={MovieDetails} /> */}
      </div>
    </div>
  );
}

export default App;
