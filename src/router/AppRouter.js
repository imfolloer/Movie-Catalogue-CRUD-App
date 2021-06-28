import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddMovie from "../components/AddMovie";
import MoviesList from "../components/MoviesList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditMovie from "../components/EditMovie";
import MoviesContext from "../context/MoviesContext";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <MoviesContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={MoviesList} path="/" exact={true} />
              <Route component={AddMovie} path="/add" />
              <Route component={EditMovie} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </MoviesContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
