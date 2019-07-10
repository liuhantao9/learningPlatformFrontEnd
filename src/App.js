import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Search from "./searchBuilder/SearchBuilder";
import Navbar from "./components/navbar";
import Blog from "./components/Blog";
import ContactUs from "./components/contactUs/contactUs";
import Publish from "./components/publish/Publish";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import UserProfile from "./components/userProfile/userProfile";
import Spinner from "./components/UI/Spinner/Spinner";

class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div
          style={{
            position: absolute,
            margin: auto,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: "100px",
            height: "100px",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
        >
          <Spinner />;
        </div>
      );
    }
    return (
      <React.Fragment>
        <Route
          path="/"
          exact
          render={props => (
            <React.Fragment>
              <Navbar />
              <Search />
              <About />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route
          path="/designer"
          exact
          component={() => (window.location = "https://zhuorandeng.com")}
        />
        <Route
          path="/blog/:id"
          exact
          component={props => <Blog {...props} />}
        />
        <Route path="/contact" exact component={ContactUs} />
        <Route
          path="/publish"
          exact
          component={props => <Publish {...props} />}
        />
        <Route
          path="/userProfile"
          exact
          component={props => (
            <React.Fragment>
              <Navbar />
              <UserProfile {...props} />
            </React.Fragment>
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
