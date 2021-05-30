import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/order">
            <Order />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
