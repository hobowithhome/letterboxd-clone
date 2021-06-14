import MovieCarousel from "./MovieCarousel";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import MovieDetails from "./MovieDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MovieCarousel />
            </Route>
            {/* <Route path="/moviedetails/:id">
              <MovieDetails />
            </Route> */}
            <Route
                path="/moviedetails/:id"
                render={props => (
                  <MovieDetails {...props} />
                )}
              />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
