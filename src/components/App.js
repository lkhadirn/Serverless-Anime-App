import React from "react";
import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>

          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/login" component={Login}></Route>
            </div>
          </Container>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
